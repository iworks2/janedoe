
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  // keep static for now (safe baseline while we reinstall)
  output: 'static',
});
