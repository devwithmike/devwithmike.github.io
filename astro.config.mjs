import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://withmike.co.za',
  integrations: [mdx(), sitemap(), tailwind(), icon()]
});
