#!/usr/bin/env node
// Pre-render task instructions to MP3 using Azure Speech.
//
// Setup:
//   1. Create a free Azure account and a "Speech" resource.
//   2. Copy the Key and Region (e.g. westeurope) from the Azure portal.
//   3. Run:
//        AZURE_SPEECH_KEY=xxx AZURE_SPEECH_REGION=westeurope node scripts/synth.js
//
// Flags:
//   --langs sq,bs,ru,en,nl   Which languages to synthesize (default: sq,bs)
//   --voice <name>           Override the multilingual voice
//   --force                  Re-render even if the file already exists

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const KEY = process.env.AZURE_SPEECH_KEY;
const REGION = process.env.AZURE_SPEECH_REGION;
if (!KEY || !REGION) {
  console.error("Missing env: AZURE_SPEECH_KEY and/or AZURE_SPEECH_REGION");
  console.error("Get them from the Azure portal → your Speech resource → Keys and Endpoint.");
  process.exit(1);
}

const args = process.argv.slice(2);
function flag(name, fallback) {
  const m = args.find((a) => a.startsWith(`--${name}=`) || a === `--${name}`);
  if (!m) return fallback;
  if (!m.includes("=")) return true;
  return m.split("=").slice(1).join("=");
}

const LANGS = (flag("langs", "sq,bs") + "").split(",").map((s) => s.trim()).filter(Boolean);
const VOICE = flag("voice", "en-US-AvaMultilingualNeural");
const FORCE = !!flag("force", false);

const ROOT = path.resolve(__dirname, "..");
const AUDIO_DIR = path.join(ROOT, "audio");
fs.mkdirSync(AUDIO_DIR, { recursive: true });

const dataSrc = fs.readFileSync(path.join(ROOT, "data.js"), "utf8");
const APP_DATA = new Function(dataSrc + "; return APP_DATA;")();

const FORMAT = "audio-24khz-48kbitrate-mono-mp3";
const ENDPOINT = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;

const LOCALE_MAP = {
  sq: "sq-AL",
  bs: "bs-BA",
  ru: "ru-RU",
  en: "en-US",
  nl: "nl-NL",
};

function audioHash(lang, text) {
  return crypto.createHash("sha256").update(`${lang}:${text}`).digest("hex").slice(0, 16);
}

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSsml(lang, text) {
  const locale = LOCALE_MAP[lang];
  if (!locale) throw new Error(`No Azure locale mapping for "${lang}"`);
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
  <voice name="${VOICE}">
    <lang xml:lang="${locale}">
      <prosody rate="0.85">${escapeXml(text)}</prosody>
    </lang>
  </voice>
</speak>`;
}

async function synthesize(lang, text) {
  const ssml = buildSsml(lang, text);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": KEY,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": FORMAT,
      "User-Agent": "febe-synth",
    },
    body: ssml,
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Azure ${res.status} ${res.statusText}: ${body.slice(0, 200)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function collectClips() {
  const clips = [];
  for (const task of APP_DATA.tasks) {
    for (const lang of LANGS) {
      const steps = task.steps[lang];
      if (!steps) continue;
      for (const text of steps) {
        clips.push({ lang, text, hash: audioHash(lang, text) });
      }
    }
  }
  // de-duplicate identical text per language (defensive)
  const seen = new Set();
  return clips.filter((c) => (seen.has(c.hash) ? false : seen.add(c.hash)));
}

async function main() {
  const clips = collectClips();
  console.log(`Voice: ${VOICE}`);
  console.log(`Languages: ${LANGS.join(", ")}`);
  console.log(`Clips: ${clips.length}`);

  let generated = 0,
    skipped = 0,
    failed = 0;

  for (const { lang, text, hash } of clips) {
    const file = path.join(AUDIO_DIR, `${hash}.mp3`);
    if (!FORCE && fs.existsSync(file)) {
      skipped++;
      continue;
    }
    try {
      const buf = await synthesize(lang, text);
      fs.writeFileSync(file, buf);
      generated++;
      const preview = text.length > 60 ? text.slice(0, 57) + "..." : text;
      console.log(`  + ${hash} ${lang}: ${preview}`);
    } catch (e) {
      failed++;
      console.error(`  ! ${hash} ${lang}: ${e.message}`);
    }
  }

  const manifest = {
    voice: VOICE,
    format: FORMAT,
    generatedAt: new Date().toISOString(),
    hashes: clips.map((c) => c.hash).sort(),
  };
  fs.writeFileSync(path.join(AUDIO_DIR, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");

  console.log(`\nDone. generated=${generated} skipped=${skipped} failed=${failed}`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
