const languageNames = {
  sq: "Shqip",
  bs: "Bosanski",
  ru: "Русский",
  en: "English",
  nl: "Nederlands",
};

const params = new URLSearchParams(window.location.search);
const taskId = params.get("task");
const childId = params.get("child");

const task = APP_DATA.tasks.find((t) => t.id === taskId);
const child = APP_DATA.children.find((c) => c.id === childId);

if (!task || !child) {
  document.getElementById("page-title").textContent = "Niet gevonden";
} else {
  renderPage(task, child);
}

function renderPage(task, child) {
  document.getElementById("back-link").href = `task.html?id=${task.id}`;

  const titleEl = document.getElementById("page-title");
  const titleImg = document.createElement("img");
  titleImg.src = child.symbol;
  titleImg.alt = child.name;
  titleImg.className = "title-icon";
  titleEl.appendChild(titleImg);
  titleEl.appendChild(document.createTextNode(` ${child.name}`));

  const nativeSteps = task.steps[child.languageCode];
  const dutchSteps = task.steps.nl;
  const content = document.getElementById("play-content");
  const isDutch = child.languageCode === "nl";
  const nativeName = languageNames[child.languageCode] || child.languageCode;

  if (!nativeSteps) {
    content.innerHTML = "<p>Geen vertaling beschikbaar.</p>";
  } else {
    nativeSteps.forEach((nativeText, i) => {
      content.appendChild(
        renderStepCard({
          index: i,
          isDutch,
          nativeText,
          dutchText: dutchSteps[i],
          nativeLang: child.languageCode,
          nativeName,
        })
      );
    });
  }

  const doneBtn = document.createElement("a");
  doneBtn.href = "scan.html";
  doneBtn.className = "done-btn";
  doneBtn.textContent = "✔️ Klaar!";
  content.appendChild(doneBtn);

  refreshAllButtons();
}

function renderStepCard({ index, isDutch, nativeText, dutchText, nativeLang, nativeName }) {
  const step = document.createElement("div");
  step.className = "step-card";

  const stepNum = document.createElement("span");
  stepNum.className = "step-number";
  stepNum.textContent = index + 1;
  step.appendChild(stepNum);

  const stepBody = document.createElement("div");
  stepBody.className = "step-body";

  if (isDutch) {
    stepBody.appendChild(createLangBlock(dutchText, "nl", "Nederlands", "native"));
  } else {
    stepBody.appendChild(createLangBlock(nativeText, nativeLang, nativeName, "native"));
    stepBody.appendChild(createLangBlock(dutchText, "nl", "Nederlands", "dutch"));
  }

  step.appendChild(stepBody);
  return step;
}

function createLangBlock(text, langCode, langName, variant) {
  const block = document.createElement("div");
  block.className = `lang-block lang-block--${variant}`;

  const header = document.createElement("div");
  header.className = "lang-block__header";

  const label = document.createElement("span");
  label.className = "lang-block__label";
  label.lang = langCode;
  label.textContent = langName;
  header.appendChild(label);

  const playBtn = document.createElement("button");
  playBtn.type = "button";
  playBtn.className = "play-btn";
  playBtn.dataset.lang = langCode;
  playBtn.dataset.text = text;
  playBtn.setAttribute("aria-label", `Luister: ${text}`);
  playBtn.innerHTML = `<span class="play-icon">▶️</span>`;
  playBtn.addEventListener("click", () => speak(text, langCode, playBtn));
  header.appendChild(playBtn);

  block.appendChild(header);

  const textEl = document.createElement("p");
  textEl.className = "lang-block__text";
  textEl.lang = langCode;
  textEl.textContent = text;
  block.appendChild(textEl);

  return block;
}
