import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnnyvaz.com.br',
  integrations: [mdx(), sitemap(), tailwind(), AstroPWA(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),]
});