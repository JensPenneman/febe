const grid = document.getElementById("qr-grid");

APP_DATA.tasks.forEach((task) => {
  const card = document.createElement("div");
  card.className = "qr-card";

  const title = document.createElement("h2");
  title.textContent = task.title;
  card.appendChild(title);

  const canvas = document.createElement("canvas");
  canvas.id = `qr-${task.id}`;
  card.appendChild(canvas);

  const url = `${APP_DATA.baseUrl}/task.html?id=${task.id}`;
  const link = document.createElement("p");
  link.className = "qr-url";
  link.textContent = url;
  card.appendChild(link);

  grid.appendChild(card);

  QRCode.toCanvas(
    canvas,
    url,
    { width: 200, margin: 2, errorCorrectionLevel: "H" },
    (err) => {
      if (err) console.error(err);
    }
  );
});
