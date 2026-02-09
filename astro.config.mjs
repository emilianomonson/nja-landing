import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // Optimiza para que todo sea HTML puro y rápido
  compressHTML: true, // Reduce el tamaño del archivo final
  build: {
    inlineStylesheets: 'always', // Evita el "parpadeo" de estilos al cargar
  },
  prefetch: {
    prefetchAll: true, // Descarga las secciones antes de que el usuario haga clic
    defaultStrategy: 'viewport',
  },
});