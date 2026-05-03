#!/usr/bin/env node
// Pre-render task instructions to MP3 using Microsoft Edge "Read Aloud" TTS.
// No dependencies — implements the WebSocket handshake and frame format manually
// so we can send the Edge-specific browser headers the endpoint requires.
//
// Usage:
//   node scripts/synth.js                       # default: sq + bs
//   node scripts/synth.js --langs=sq,bs,ru,en,nl
//   node scripts/synth.js --force               # re-render existing files
//   node scripts/synth.js --rate=-25%           # slower for younger learners

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const https = require("https");
const { EventEmitter } = require("events");

// ── CLI flags ────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
function flag(name, fallback) {
  const m = args.find((a) => a.startsWith(`--${name}=`) || a === `--${name}`);
  if (!m) return fallback;
  if (!m.includes("=")) return true;
  return m.split("=").slice(1).join("=");
}
const LANGS = (flag("langs", "sq,bs") + "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const FORCE = !!flag("force", false);
const RATE = flag("rate", "-15%");

// ── Config ───────────────────────────────────────────────────────────────
const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const CHROMIUM_FULL_VERSION = "143.0.3650.75";
const CHROMIUM_MAJOR_VERSION = CHROMIUM_FULL_VERSION.split(".")[0];
const SEC_MS_GEC_VERSION = `1-${CHROMIUM_FULL_VERSION}`;
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  `(KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR_VERSION}.0.0.0 Safari/537.36 Edg/${CHROMIUM_MAJOR_VERSION}.0.0.0`;
const ORIGIN = "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold";
const OUTPUT_FORMAT = "audio-24khz-48kbitrate-mono-mp3";

const VOICE_MAP = {
  sq: "sq-AL-AnilaNeural",
  bs: "bs-BA-VesnaNeural",
  ru: "ru-RU-SvetlanaNeural",
  en: "en-US-JennyNeural",
  nl: "nl-NL-ColetteNeural",
};

const ROOT = path.resolve(__dirname, "..");
const AUDIO_DIR = path.join(ROOT, "audio");
fs.mkdirSync(AUDIO_DIR, { recursive: true });

// ── Edge "DRM" token (rotates every 5 minutes) ───────────────────────────
function generateSecMsGec() {
  // .NET ticks: 100-nanosecond intervals since 0001-01-01
  const epochOffset = 11644473600n; // seconds between 0001-01-01 and 1970-01-01
  let ticks = BigInt(Math.floor(Date.now() / 1000)) + epochOffset;
  ticks = ticks * 10000000n;
  ticks -= ticks % 3000000000n;
  const msg = ticks.toString() + TRUSTED_CLIENT_TOKEN;
  return crypto.createHash("sha256").update(msg).digest("hex").toUpperCase();
}

function buildEdgeUrl() {
  const sec = generateSecMsGec();
  return (
    "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1" +
    `?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}` +
    `&Sec-MS-GEC=${sec}` +
    `&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}`
  );
}

// ── Minimal WebSocket client (RFC 6455) ──────────────────────────────────
class MiniWebSocket extends EventEmitter {
  constructor(url, headers) {
    super();
    this.url = new URL(url);
    this.headers = headers || {};
    this.socket = null;
    this._buf = Buffer.alloc(0);
    this._closed = false;
  }

  connect() {
    return new Promise((resolve, reject) => {
      const wsKey = crypto.randomBytes(16).toString("base64");
      const req = https.request({
        host: this.url.hostname,
        port: this.url.port || 443,
        path: this.url.pathname + this.url.search,
        method: "GET",
        headers: {
          Host: this.url.hostname,
          Connection: "Upgrade",
          Upgrade: "websocket",
          "Sec-WebSocket-Version": "13",
          "Sec-WebSocket-Key": wsKey,
          ...this.headers,
        },
      });
      req.on("upgrade", (res, socket, head) => {
        this.socket = socket;
        socket.setNoDelay(true);
        if (head && head.length) this._onData(head);
        socket.on("data", (d) => this._onData(d));
        socket.on("close", () => {
          if (!this._closed) {
            this._closed = true;
            this.emit("close", { code: 1006, reason: "" });
          }
        });
        socket.on("error", (e) => this.emit("error", e));
        resolve();
      });
      req.on("response", (res) => {
        // Handshake failed (didn't upgrade)
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (d) => (body += d));
        res.on("end", () =>
          reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 200)}`))
        );
      });
      req.on("error", reject);
      req.end();
    });
  }

  _onData(chunk) {
    this._buf = Buffer.concat([this._buf, chunk]);
    while (this._buf.length >= 2) {
      const b0 = this._buf[0];
      const b1 = this._buf[1];
      const opcode = b0 & 0x0f;
      const masked = (b1 & 0x80) !== 0;
      let len = b1 & 0x7f;
      let off = 2;
      if (len === 126) {
        if (this._buf.length < off + 2) return;
        len = this._buf.readUInt16BE(off);
        off += 2;
      } else if (len === 127) {
        if (this._buf.length < off + 8) return;
        len = Number(this._buf.readBigUInt64BE(off));
        off += 8;
      }
      let mask;
      if (masked) {
        if (this._buf.length < off + 4) return;
        mask = this._buf.subarray(off, off + 4);
        off += 4;
      }
      if (this._buf.length < off + len) return;
      let payload = this._buf.subarray(off, off + len);
      if (masked) {
        payload = Buffer.from(payload);
        for (let i = 0; i < payload.length; i++) payload[i] ^= mask[i & 3];
      } else {
        payload = Buffer.from(payload);
      }
      this._buf = this._buf.subarray(off + len);

      if (opcode === 0x1) {
        this.emit("message", { data: payload.toString("utf8"), binary: false });
      } else if (opcode === 0x2) {
        this.emit("message", { data: payload, binary: true });
      } else if (opcode === 0x8) {
        const code = payload.length >= 2 ? payload.readUInt16BE(0) : 1005;
        const reason = payload.length > 2 ? payload.subarray(2).toString("utf8") : "";
        this._closed = true;
        try {
          this.socket.end();
        } catch {}
        this.emit("close", { code, reason });
      } else if (opcode === 0x9) {
        this._send(payload, 0xa);
      }
      // 0xa pong: ignore
    }
  }

  _send(payload, opcode) {
    if (typeof payload === "string") payload = Buffer.from(payload, "utf8");
    const len = payload.length;
    const mask = crypto.randomBytes(4);
    let header;
    if (len < 126) {
      header = Buffer.alloc(2);
      header[1] = 0x80 | len;
    } else if (len < 65536) {
      header = Buffer.alloc(4);
      header[1] = 0x80 | 126;
      header.writeUInt16BE(len, 2);
    } else {
      header = Buffer.alloc(10);
      header[1] = 0x80 | 127;
      header.writeBigUInt64BE(BigInt(len), 2);
    }
    header[0] = 0x80 | opcode;
    const masked = Buffer.alloc(len);
    for (let i = 0; i < len; i++) masked[i] = payload[i] ^ mask[i & 3];
    this.socket.write(Buffer.concat([header, mask, masked]));
  }

  sendText(s) {
    this._send(s, 0x1);
  }

  close() {
    if (this._closed) return;
    this._closed = true;
    try {
      this.socket.end();
    } catch {}
  }
}

// ── Edge TTS protocol messages ───────────────────────────────────────────
function uuid32() {
  return crypto.randomUUID().replace(/-/g, "");
}
function nowHeaderTime() {
  return new Date().toISOString();
}
function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
function buildSsml(voice, text, rate) {
  return (
    `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">` +
    `<voice name="${voice}">` +
    `<prosody rate="${rate}">${escapeXml(text)}</prosody>` +
    `</voice></speak>`
  );
}
function speechConfigMessage() {
  const headers =
    `X-Timestamp:${nowHeaderTime()}\r\n` +
    `Content-Type:application/json; charset=utf-8\r\n` +
    `Path:speech.config\r\n\r\n`;
  const body = {
    context: {
      synthesis: {
        audio: {
          metadataoptions: {
            sentenceBoundaryEnabled: "false",
            wordBoundaryEnabled: "false",
          },
          outputFormat: OUTPUT_FORMAT,
        },
      },
    },
  };
  return headers + JSON.stringify(body);
}
function ssmlMessage(requestId, ssml) {
  return (
    `X-RequestId:${requestId}\r\n` +
    `Content-Type:application/ssml+xml\r\n` +
    `X-Timestamp:${nowHeaderTime()}\r\n` +
    `Path:ssml\r\n\r\n` +
    ssml
  );
}

async function synthOnce(voice, text) {
  const ws = new MiniWebSocket(buildEdgeUrl(), {
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    Origin: ORIGIN,
    "User-Agent": USER_AGENT,
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9",
  });
  await ws.connect();

  return new Promise((resolve, reject) => {
    const chunks = [];
    let settled = false;
    const finish = (fn) => {
      if (settled) return;
      settled = true;
      ws.close();
      fn();
    };
    const timer = setTimeout(
      () => finish(() => reject(new Error("timeout after 30s"))),
      30000
    );

    ws.on("message", ({ data, binary }) => {
      if (!binary) {
        if (data.includes("Path:turn.end")) {
          clearTimeout(timer);
          finish(() => resolve(Buffer.concat(chunks)));
        }
      } else {
        if (data.length < 2) return;
        const headerLen = data.readUInt16BE(0);
        chunks.push(data.subarray(2 + headerLen));
      }
    });
    ws.on("error", (e) => {
      clearTimeout(timer);
      finish(() => reject(e));
    });
    ws.on("close", ({ code, reason }) => {
      if (settled) return;
      clearTimeout(timer);
      finish(() =>
        reject(new Error(`closed early (code ${code}${reason ? ": " + reason : ""})`))
      );
    });

    try {
      ws.sendText(speechConfigMessage());
      ws.sendText(ssmlMessage(uuid32(), buildSsml(voice, text, RATE)));
    } catch (e) {
      clearTimeout(timer);
      finish(() => reject(e));
    }
  });
}

// ── Driver ───────────────────────────────────────────────────────────────
const dataSrc = fs.readFileSync(path.join(ROOT, "data.js"), "utf8");
const APP_DATA = new Function(dataSrc + "; return APP_DATA;")();

function audioHash(lang, text) {
  return crypto
    .createHash("sha256")
    .update(`${lang}:${text}`)
    .digest("hex")
    .slice(0, 16);
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
  const seen = new Set();
  return clips.filter((c) => (seen.has(c.hash) ? false : seen.add(c.hash)));
}

async function main() {
  const allClips = collectClips();
  console.log("Voices:");
  for (const l of LANGS) console.log(`  ${l} = ${VOICE_MAP[l] || "(no mapping)"}`);
  console.log(`Clips: ${allClips.length}`);

  let generated = 0,
    skipped = 0,
    failed = 0;

  for (const { lang, text, hash } of allClips) {
    const file = path.join(AUDIO_DIR, `${hash}.mp3`);
    if (!FORCE && fs.existsSync(file)) {
      skipped++;
      continue;
    }
    const voice = VOICE_MAP[lang];
    if (!voice) {
      console.error(`  ! ${hash} ${lang}: no voice mapping`);
      failed++;
      continue;
    }
    try {
      const buf = await synthOnce(voice, text);
      if (!buf.length) throw new Error("empty audio");
      fs.writeFileSync(file, buf);
      generated++;
      const preview = text.length > 60 ? text.slice(0, 57) + "..." : text;
      console.log(`  + ${hash} ${lang}: ${preview}`);
      await new Promise((r) => setTimeout(r, 150));
    } catch (e) {
      failed++;
      console.error(`  ! ${hash} ${lang}: ${e.message || e}`);
    }
  }

  const manifest = {
    voices: Object.fromEntries(LANGS.map((l) => [l, VOICE_MAP[l]])),
    format: OUTPUT_FORMAT,
    generatedAt: new Date().toISOString(),
    hashes: allClips.map((c) => c.hash).sort(),
  };
  fs.writeFileSync(
    path.join(AUDIO_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n"
  );

  console.log(
    `\nDone. generated=${generated} skipped=${skipped} failed=${failed}`
  );
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
