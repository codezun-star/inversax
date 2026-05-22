import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: 'https://inversax.com',
  vite: {
    ssr: {
      external: ['better-sqlite3'],
    },
    optimizeDeps: {
      exclude: ['better-sqlite3'],
    },
  },
});
