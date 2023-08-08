import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { accessibleCheckbox } from './src/rehype-plugins/addAccessability';
import { removeInlineStyles } from './src/rehype-plugins/removeInlineStyles';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "your deployed URL",
  // base: '/repo-name',         // use this for GitHub Pages 
  markdown: {
    rehypePlugins: [accessibleCheckbox, removeInlineStyles]
  }
});
