import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ries.live',
  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    inlineStylesheets: 'auto'
  }
});
