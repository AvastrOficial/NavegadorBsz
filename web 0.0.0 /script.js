 const API_KEY = "TU_API_KEY";

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('proxyForm');
    if (!form) return;

    console.log("Script cargado correctamente ✅");

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const url = document.getElementById('urlInput').value;
      const iframe = document.getElementById('resultFrame');

      iframe.srcdoc = "<p style='padding:20px;font-family:sans-serif;'>⏳ Cargando...</p>";

      try {
        const response = await fetch(`https://app.scrapingbee.com/api/v1?api_key=${API_KEY}&url=${encodeURIComponent(url)}&render_js=true`);

        if (!response.ok) {
          console.error("Error en la respuesta de la API:", response.status, response.statusText);
          throw new Error("No se pudo cargar el sitio web");
        }

        const html = await response.text();
        iframe.srcdoc = html;
      } catch (error) {
        console.error("❌ Error al procesar el proxy:", error);
        iframe.srcdoc = `<p style='color:red;padding:20px;'>❌ Error: ${error.message}</p>`;
      }
    });
  });
