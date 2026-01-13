import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [mdx(), keystatic(), react(), tailwind()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});