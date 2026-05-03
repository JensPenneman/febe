const params = new URLSearchParams(window.location.search);
const taskId = params.get("id");
const task = APP_DATA.tasks.find((t) => t.id === taskId);

if (!task) {
  document.getElementById("task-title").textContent = "Opdracht niet gevonden";
} else {
  document.getElementById("task-title").textContent = task.title;

  const grid = document.getElementById("icon-grid");

  APP_DATA.children.forEach((child) => {
    if (!task.steps[child.languageCode]) return;

    const card = document.createElement("a");
    card.className = "icon-card";
    card.href = `play.html?task=${task.id}&child=${child.id}`;

    const icon = document.createElement("img");
    icon.className = "icon";
    icon.src = child.symbol;
    icon.alt = child.name;
    card.appendChild(icon);

    card.addEventListener("click", () => {
      icon.style.viewTransitionName = "child-symbol";
    });

    const name = document.createElement("span");
    name.className = "icon-name";
    name.textContent = child.name;
    card.appendChild(name);

    grid.appendChild(card);
  });
}
