import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  integrations: [tailwind()],
  site: 'https://inversax.com',
});
