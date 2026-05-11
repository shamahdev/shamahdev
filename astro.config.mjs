// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://shamah.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), icon()],
  adapter: vercel()
});
