import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  output: 'static',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
      strategy: 'pathname'
    }
  },
  site: 'https://heatnederland.vercel.app',
  base: '/',
  build: {
    assets: '_assets'
  }
}); 