// Routes play-button clicks to either a pre-rendered Azure/Edge MP3
// (in audio/<hash>.mp3, listed in audio/manifest.json) or the device's
// built-in speechSynthesis voice. If neither is available the button
// is disabled and shown with a muted-speaker icon.

let audioManifest = null;
let activeAudio = null;

fetch("audio/manifest.json", { cache: "no-cache" })
  .then((r) => (r.ok ? r.json() : null))
  .then((m) => {
    audioManifest = m ? new Set(m.hashes) : new Set();
    refreshAllButtons();
  })
  .catch(() => {
    audioManifest = new Set();
    refreshAllButtons();
  });

if (typeof window.speechSynthesis !== "undefined") {
  window.speechSynthesis.addEventListener?.("voiceschanged", refreshAllButtons);
  window.speechSynthesis.onvoiceschanged = refreshAllButtons;
}

async function audioHash(lang, text) {
  const data = new TextEncoder().encode(`${lang}:${text}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 16);
}

function findVoice(langCode) {
  const voices = window.speechSynthesis.getVoices();
  const lc = langCode.toLowerCase();
  return (
    voices.find((v) => v.lang.toLowerCase() === lc) ||
    voices.find((v) => v.lang.toLowerCase().startsWith(lc + "-")) ||
    null
  );
}

function stopAll() {
  window.speechSynthesis.cancel();
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
}

function playAudioFile(src, btn) {
  stopAll();
  const audio = new Audio(src);
  activeAudio = audio;
  btn.classList.add("playing");
  const stop = () => {
    btn.classList.remove("playing");
    if (activeAudio === audio) activeAudio = null;
  };
  audio.addEventListener("ended", stop);
  audio.addEventListener("error", stop);
  audio.play().catch(stop);
}

function speakSystem(text, langCode, btn) {
  stopAll();
  const voice = findVoice(langCode);
  if (!voice) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = 0.85;

  btn.classList.add("playing");
  utterance.onend = () => btn.classList.remove("playing");
  utterance.onerror = () => btn.classList.remove("playing");

  window.speechSynthesis.speak(utterance);
}

function speak(text, langCode, btn) {
  const audioSrc = btn.dataset.audio;
  if (audioSrc) {
    playAudioFile(audioSrc, btn);
  } else {
    speakSystem(text, langCode, btn);
  }
}

async function refreshButton(btn) {
  const lang = btn.dataset.lang;
  const text = btn.dataset.text;
  let hasAudio = false;
  if (audioManifest && text) {
    const hash = await audioHash(lang, text);
    if (audioManifest.has(hash)) {
      btn.dataset.audio = `audio/${hash}.mp3`;
      hasAudio = true;
    }
  }
  const playable = hasAudio || !!findVoice(lang);
  if (playable) {
    btn.classList.remove("play-btn--no-voice");
    btn.disabled = false;
    btn.title = "";
    btn.querySelector(".play-icon").textContent = "▶️";
  } else {
    btn.classList.add("play-btn--no-voice");
    btn.disabled = true;
    btn.title = "Geen stem beschikbaar voor deze taal op dit toestel";
    btn.classList.remove("playing");
    btn.querySelector(".play-icon").textContent = "🔇";
  }
}

function refreshAllButtons() {
  document.querySelectorAll(".play-btn[data-lang]").forEach(refreshButton);
}
