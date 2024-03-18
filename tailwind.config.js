/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1242px',
    },
    extend: {
      colors: {
        transperent: 'transperent',
        current: 'currentColor',
        muted: '#6c757d',
        white: '#ffffff',
        dark: '#000',
        custom: '#0aa195',
        themedark: '#20262d',
        light: '#f8f9fa',
      },
    },
  },
}