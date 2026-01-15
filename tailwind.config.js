/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        'background-dark': '#0F0F0F',
        'surface-dark': '#1a1a1a',
        'border-dark': '#333333',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%': { clipPath: 'inset(80% 0 1% 0)' },
          '20%': { clipPath: 'inset(10% 0 60% 0)' },
          '40%': { clipPath: 'inset(40% 0 43% 0)' },
          '60%': { clipPath: 'inset(80% 0 1% 0)' },
          '80%': { clipPath: 'inset(15% 0 70% 0)' },
          '100%': { clipPath: 'inset(50% 0 30% 0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        scan: 'scan 4s linear infinite',
      },
    },
  },
  plugins: [],
}

