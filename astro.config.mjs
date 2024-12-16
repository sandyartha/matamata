import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://matamata.netlify.app",
  trailingSlash: "never",
  integrations: [
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2022-02-24'),
    }), 
    mdx(),
    pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
