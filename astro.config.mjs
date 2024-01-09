import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://withmike.co',
  integrations: [tailwind(), mdx(), sitemap(), partytown(), icon()]
});