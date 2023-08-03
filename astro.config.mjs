import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // site: "Your Site Here"
  // base: '/repo-name',         use this for GitHub Pages 
});