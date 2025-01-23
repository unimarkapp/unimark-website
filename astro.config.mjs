import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://unimark.app',
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap()],
  server: {
    port: 3000,
    host: true,
  },
  // Needed for vite v6
  vite: {
    preview: {
      allowedHosts: ['https://unimark.app'],
    },
  },
});