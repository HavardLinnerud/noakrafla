import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  server: { port: 3006, host: true}


});