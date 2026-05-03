const status = document.getElementById("scan-status");
let navigating = false;

const scanner = new Html5Qrcode("scanner-container");

scanner
  .start(
    { facingMode: "environment" },
    { fps: 10, qrbox: { width: 250, height: 250 } },
    (decodedText) => {
      if (navigating) return;

      if (
        decodedText.includes("task.html") ||
        decodedText.includes("play.html")
      ) {
        navigating = true;
        status.textContent = "Gevonden! Even laden...";
        status.className = "scan-status success";
        scanner.stop().then(() => {
          try {
            const url = new URL(decodedText);
            window.location.href = url.pathname.split("/").pop() + url.search;
          } catch {
            window.location.href = decodedText;
          }
        });
      } else {
        status.textContent = "Ongeldige QR-code, probeer opnieuw.";
        status.className = "scan-status error";
      }
    },
    () => {} // ignore scan failures (no QR in frame)
  )
  .catch((err) => {
    status.textContent =
      "Kan camera niet openen. Geef toestemming in de instellingen.";
    status.className = "scan-status error";
    console.error(err);
  });
