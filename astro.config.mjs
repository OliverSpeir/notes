import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { accessibleCheckbox } from './src/rehype-plugins/addAccessability'
import { removeInlineStyles } from './src/rehype-plugins/removeInlineStyles'
import { autolinkConfig } from './src/rehype-plugins/rehype-autolink-config'
import purgecss from "astro-purgecss"
import autolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import critters from "astro-critters"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), critters(), purgecss()],
  site: "http://www.example.com",
  // base: '/repo-name',         // use this for GitHub Pages 
  markdown: {
    rehypePlugins: [rehypeSlug, accessibleCheckbox, removeInlineStyles, [autolinkHeadings, autolinkConfig]]
  }
});