// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jdvalencir-ai.github.io',
  base: '/nasua-website-v2',   // ← quitar esto si usas dominio propio (nasuanarica.com)
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});