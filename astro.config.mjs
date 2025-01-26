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
  site: 'https://ahmetcakmak606.github.io',
  base: '/heatnederland',
}); 