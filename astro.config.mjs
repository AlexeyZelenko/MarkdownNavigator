import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [mdx(), tailwind(), vue()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript'],
      wrap: true
    }
  },
  outDir: 'dist',
  base: '/MarkdownNavigator/',
  site: 'https://alexeyzelenko.github.io/MarkdownNavigator/',
  vite: {
    base: '/MarkdownNavigator/',
    define: {
      'import.meta.env.VITE_BASE_URL': JSON.stringify('/MarkdownNavigator/')  // Базовый путь для фронтенда
    },
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  },
  build: {
    format: 'directory',  // GitHub Pages работает лучше с папками
    nojekyll: true,  // 📌 Добавляет `.nojekyll`
  }
});