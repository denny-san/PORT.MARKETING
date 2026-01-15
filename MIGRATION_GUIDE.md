# Guía de Migración a Next.js para Framer

## 📦 Paso 1: Instalar Next.js

Reemplaza tu `package.json` con el contenido de `package-framer.json`:

```bash
cp package-framer.json package.json
npm install
```

## 📁 Paso 2: Crear Estructura de Next.js

Necesitas crear la siguiente estructura:

```
app/
├── layout.tsx          # Layout principal (reemplaza App.tsx)
├── page.tsx           # Página Home
├── about/
│   └── page.tsx
├── skills/
│   └── page.tsx
├── experience/
│   └── page.tsx
├── certs/
│   └── page.tsx
└── contact/
    └── page.tsx
```

## 🔄 Paso 3: Convertir Componentes

### Layout Principal (app/layout.tsx)

Convierte `App.tsx` a `app/layout.tsx`:

```tsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'SOC Security Analyst Portfolio',
  description: 'Portfolio profesional para Analistas de Seguridad SOC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-background-dark text-white font-display">
        <Header />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
```

### Páginas

Cada página en `pages/` debe convertirse a `app/[ruta]/page.tsx`:

- `pages/Home.tsx` → `app/page.tsx`
- `pages/About.tsx` → `app/about/page.tsx`
- `pages/Skills.tsx` → `app/skills/page.tsx`
- etc.

### Header Component

Crea `components/Header.tsx` basado en el Header de `App.tsx`, pero usando `next/link` en lugar de `react-router-dom`:

```tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// ... resto del código
```

## 🎨 Paso 4: Estilos Globales

Crea `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

body {
  background-color: #0F0F0F;
  cursor: crosshair;
}

.grid-bg {
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

## ✅ Paso 5: Verificar

1. Ejecuta `npm run dev`
2. Verifica que todas las páginas funcionen
3. Prueba la navegación
4. Verifica que las imágenes se carguen correctamente

## 🚀 Paso 6: Build para Producción

```bash
npm run build
```

Esto creará una carpeta `out/` con el sitio estático listo para desplegar.

## 📝 Notas Importantes

- **Routing**: Next.js usa el sistema de archivos para routing, no HashRouter
- **Links**: Usa `next/link` en lugar de `react-router-dom` Link
- **Imágenes**: Usa `next/image` para optimización (opcional)
- **Client Components**: Agrega `'use client'` a componentes que usan hooks o interactividad

## 🆘 Problemas Comunes

### Error: Cannot find module 'next'
→ Ejecuta `npm install` nuevamente

### Las rutas no funcionan
→ Asegúrate de que los archivos estén en `app/[ruta]/page.tsx`

### Estilos no se aplican
→ Verifica que `globals.css` esté importado en `layout.tsx`

