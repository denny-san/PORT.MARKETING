# SOC Analyst Portfolio - Framer Template

## 🚀 Descripción

Plantilla profesional de portfolio para Analistas de Seguridad SOC (Security Operations Center). Diseño moderno con estética técnica y futurista, perfecto para mostrar certificaciones, habilidades y experiencia en ciberseguridad.

## ✨ Características

- **Diseño Moderno**: Interfaz oscura con efectos visuales profesionales
- **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- **6 Páginas Completas**: Home, About, Skills, Experience, Certifications, Contact
- **Componentes Interactivos**: Terminal animado, chat AI (opcional), botón WhatsApp
- **Animaciones Suaves**: Efectos hover, transiciones y animaciones CSS
- **SEO Optimizado**: Meta tags y estructura semántica
- **Fácil Personalización**: Código limpio y bien organizado

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Descomprime el archivo de la plantilla
2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página Home
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── certs/
│   └── contact/
├── components/             # Componentes reutilizables
├── public/                 # Archivos estáticos (imágenes)
└── styles/                # Estilos globales
```

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js` para modificar los colores principales:

```js
colors: {
  primary: '#999999',  // Color principal
  'background-dark': '#0F0F0F',
}
```

### Agregar Contenido

- **Certificaciones**: Edita `app/certs/page.tsx`
- **Experiencia**: Edita `app/experience/page.tsx`
- **Habilidades**: Edita `app/skills/page.tsx`
- **Sobre Mí**: Edita `app/about/page.tsx`

### Imágenes

Coloca tus imágenes en la carpeta `public/IMG/` y actualiza las rutas en los componentes.

### Chat AI (Opcional)

Para habilitar el chat AI, agrega tu API key de Gemini en las variables de entorno:

```env
GEMINI_API_KEY=tu_api_key_aqui
```

## 📱 Páginas Incluidas

1. **Home**: Página principal con hero section y estadísticas
2. **About**: Información personal y perfil profesional
3. **Skills**: Habilidades técnicas y competencias
4. **Experience**: Experiencia laboral y proyectos
5. **Certifications**: Certificaciones y credenciales
6. **Contact**: Formulario de contacto y redes sociales

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Despliega con un clic

### Otros Proveedores

El proyecto está configurado para exportación estática (`output: 'export'`), por lo que puede desplegarse en cualquier hosting estático.

## 📝 Licencia

Esta plantilla está lista para usar y personalizar según tus necesidades.

## 🆘 Soporte

Para soporte o preguntas, contacta al creador a través del portfolio.

## 📄 Changelog

### v1.0.0
- Lanzamiento inicial
- 6 páginas completas
- Componentes interactivos
- Diseño responsive
- Optimización SEO

