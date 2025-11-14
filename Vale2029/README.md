# 🌟 Portafolio Personal - Vale2029

Portafolio web personal creado como parte de la tarea del Módulo 1 de JavaScript Cohorte 5.

## 📋 Descripción

Este es mi portafolio web personal donde muestro mis habilidades, proyectos y forma de contacto como desarrolladora web en formación.

## ✨ Características

### Estructura HTML
- ✅ Encabezado con nombre/logo (Vale2029)
- ✅ Sección "Sobre mí" con información personal y habilidades
- ✅ Sección "Proyectos" con 3 ejemplos de proyectos
- ✅ Sección "Contacto" con formulario y métodos de contacto

### Diseño CSS
- 🎨 Paleta de colores coherente (púrpura/rosa)
- 📱 Diseño responsive para móviles y tablets
- 🖋️ Tipografía legible y moderna
- 🎯 Estructura limpia y profesional
- ✨ Animaciones y efectos visuales

### Interactividad JavaScript
- 🔘 Botones "Ver más" en cada proyecto
- 📜 Animaciones al hacer scroll
- ⬆️ Botón "Volver arriba" dinámico
- ⌨️ Efecto de escritura en el título
- 📧 Formulario de contacto funcional
- 🎭 Animaciones en badges de habilidades

## 🚀 Cómo visualizar el proyecto

### Opción 1: Abrir localmente
1. Descarga o clona este repositorio
2. Navega a la carpeta `Vale2029`
3. Abre el archivo `index.html` en tu navegador

### Opción 2: Servidor local
```bash
# Si tienes Python instalado
cd Vale2029
python -m http.server 8000

# Si tienes Node.js y http-server
npx http-server Vale2029 -o

# Si usas VS Code
# Instala la extensión "Live Server" y haz clic derecho en index.html > "Open with Live Server"
```

## 📦 Publicación en GitHub Pages

### Pasos para publicar:

1. **Asegúrate de que tu código esté en GitHub:**
   ```bash
   git add .
   git commit -m "Añadir portafolio personal Vale2029"
   git push origin main
   ```

2. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Click en "Settings" (Configuración)
   - Navega a "Pages" en el menú lateral
   - En "Source", selecciona la rama "main" o "master"
   - En la carpeta, selecciona "/root" o "/Vale2029" según tu estructura
   - Click en "Save"
   - Espera unos minutos y tu sitio estará disponible en:
     `https://[tu-usuario].github.io/[nombre-repositorio]/Vale2029/`

### Configuración alternativa (si quieres que sea la página principal):
Si quieres que el portafolio sea accesible directamente en `https://[tu-usuario].github.io/[nombre-repositorio]/`:

1. Mueve los archivos `index.html`, `style.css` y `script.js` a la raíz del repositorio
2. Sigue los pasos anteriores pero selecciona "/root"

## 🌐 Publicación en Netlify

### Opción 1: Desde GitHub (Recomendada)

1. Ve a [netlify.com](https://netlify.com) y crea una cuenta
2. Click en "New site from Git"
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Base directory**: `Vale2029`
   - **Build command**: (dejar vacío)
   - **Publish directory**: `Vale2029`
5. Click en "Deploy site"
6. Tu sitio estará disponible en un dominio como: `https://random-name-123456.netlify.app`

### Opción 2: Drag & Drop

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `Vale2029` directamente a Netlify
3. ¡Listo! Tu sitio estará publicado instantáneamente

### Personalizar el dominio en Netlify
- En el dashboard de Netlify, click en "Domain settings"
- Click en "Options" > "Edit site name"
- Cambia el nombre a algo como `vale2029-portfolio`
- Tu sitio será: `https://vale2029-portfolio.netlify.app`

## 📁 Estructura de archivos

```
Vale2029/
│
├── index.html          # Estructura principal del sitio
├── style.css           # Estilos y diseño
├── script.js           # Interactividad y animaciones
└── README.md           # Este archivo
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño, animaciones y responsive design
  - Variables CSS
  - Flexbox y Grid
  - Animaciones y transiciones
  - Media queries
- **JavaScript (Vanilla)**: Interactividad
  - Manipulación del DOM
  - Event Listeners
  - Intersection Observer API
  - Animaciones dinámicas

## 📝 Notas de desarrollo

- El formulario de contacto actualmente muestra una alerta. En producción, necesitarías conectarlo con un servicio backend o usar servicios como Formspree, EmailJS, o Netlify Forms.
- Los enlaces de proyectos son demostrativos. Reemplázalos con tus proyectos reales.
- Las imágenes de proyectos usan emojis como placeholders. Puedes reemplazarlos con imágenes reales.

## 🎨 Personalización

Para personalizar este portafolio:

1. **Colores**: Modifica las variables CSS en `style.css`:
   ```css
   :root {
       --primary-color: #6366f1;  /* Cambia este color */
       --secondary-color: #ec4899; /* Y este también */
   }
   ```

2. **Contenido**: Edita el texto en `index.html` con tu información personal

3. **Proyectos**: Actualiza la sección de proyectos con tus propios trabajos

4. **Imágenes**: Añade imágenes reales en la carpeta y actualiza las referencias

## 📧 Contacto

- **Email**: vale2029@example.com
- **GitHub**: [github.com/vale2029](https://github.com/vale2029)
- **LinkedIn**: [linkedin.com/in/vale2029](https://linkedin.com/in/vale2029)

## 📄 Licencia

Este proyecto fue creado con fines educativos como parte del curso de JavaScript.

---

💜 Hecho con amor y mucho café ☕ por Vale2029
