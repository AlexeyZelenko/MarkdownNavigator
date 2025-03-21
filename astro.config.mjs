import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript'],
      wrap: true
    }
  },
  site: 'https://alexeyzelenko.github.io/MarkdownNavigator/',
  base: '/MarkdownNavigator/',
  outDir: 'dist'
});