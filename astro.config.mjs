import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://withmike.co',
  integrations: [tailwind(), mdx(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), partytown()]
});