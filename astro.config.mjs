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
  site: 'https://alexeyzelenko.github.io/MarkdownNavigator/',
  outDir: 'dist',
  vite: {
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  }
});