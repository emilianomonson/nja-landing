/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // Asegúrate de que esta línea esté igual
  theme: {
    extend: {
      colors: {
        'nja-dark': '#0a0a0a',
        'nja-green': '#00FF41',
        'nja-cyan': '#00f2fe',
      },
      fontFamily: {
        'tech': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}