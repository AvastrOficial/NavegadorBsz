# 🌐 BSZ Proxy Web

Una herramienta sencilla para cargar sitios web usando una API de scraping y renderizado, todo embebido en un `iframe`. Perfecto para visualizar sitios rápidamente sin salir de la interfaz.

## 🚀 ¿Qué hace esta herramienta?

Permite ingresar una URL en un campo de texto y visualizar la página solicitada directamente en un iframe usando la API de [ScrapingBee](https://www.scrapingbee.com/).

> ⚙️ Se utiliza `srcdoc` para inyectar el contenido HTML directamente en el `iframe`, brindando una experiencia más fluida.

---

## 🔌 API Utilizada

Este proyecto utiliza la API de **ScrapingBee** para procesar y renderizar las páginas web solicitadas.

**Endpoint:**  
```bash
https://app.scrapingbee.com/api/v1
```
## Parámetros utilizados:
api_key: tu clave de API personal.
url: la URL que deseas renderizar.
render_js=true: para que el contenido renderizado incluya JavaScript.

## 🧾 Límite Gratuito
Con el plan gratuito de ScrapingBee, tienes 1,000 peticiones mensuales disponibles.

## 🧠 Explicación del Código
> 1. Ingreso y visualización
> El formulario toma una URL ingresada por el usuario:
```bash
<input type="url" id="urlInput" placeholder="https://ejemplo.com" required>

iframe.srcdoc = html;

const API_KEY = "TU_API_KEY";

fetch(`https://app.scrapingbee.com/api/v1?api_key=${API_KEY}&url=${encodeURIComponent(url)}&render_js=true`)
La URL ingresada se envía a ScrapingBee, que renderiza la página y retorna el HTML.
```
> El HTML se inyecta en el iframe con iframe.srcdoc = html.
> Esto permite una navegación segura y eficiente.

📦 Estructura del proyecto
```bash
📁 bsz-proxy-web/
├── index.html
└── README.md

```
## ⚠️ Advertencias
> ❗ No es una VPN ni un proxy real con privacidad. Solo se usa para mostrar HTML renderizado.
> 🔄 El uso excesivo puede agotar tus 1,000 peticiones mensuales rápidamente.
> 🚫 No apto para navegación interactiva compleja, como inicios de sesión o sesiones dinámicas.

## 👨‍💻 Autor
> Bsz Programy
![image](https://github.com/user-attachments/assets/7027c0ef-ae25-4356-b0e0-9bccedae83d9)

