/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'nja-green': '#00FF41',
        'nja-cyan': '#00f2fe',
      },
      // Unificamos la fuente Inter que definimos en el Layout
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-nja': 'linear-gradient(to right, #00FF41, #00f2fe, #ffffff)',
      },
    },
  },
  plugins: [],
}