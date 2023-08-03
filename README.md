# Obsidian Notes

I created this Astro project to deploy the notes I create in obsidian onto github pages. The idea is I can add my notes to this repo without messing with frontmatter at all. 

There is one optional frontmatter property built in called footer, which will put a footer at the bottom with social links. Include `footer: "true"` in the .md files frontmatter and it will render. 

This Uses Astro and their Content Collections which basically functions as a local CMS. 

## Style

This uses tailwind typography and github flavored markdown (which is default in astro).

## Deploy your own

I used CloudFlare Pages, but any static site builder will work. I have included the Github Action created by Astro to deploy via GitHub Pages if you want, all you have to do is have the repo deploy via Actions and set the `base:` in `astro.config.mjs`

1. In the `astro.config.mjs` file set the site to your deployed URL
2. In `/src/components/Footer.astro` change the links from example.com to your socials
3. Put any .md or .mdx file you want to publish in `/src/content/notes/`
4. Deploy with your favorite service (Netlify, CF Pages, Vercel, Github Pages, etc...)


## Structure

Every note that is in the same directory will be linked together as "Related"

For example `/content/notes/example.md` will be linked with `/content/notes/example2.md` as will `/content/notes/example/example.md` and `/content/notes/example/example2.md`


## How I connected Obsidian

I created a zsh alias for copying the notes in my Obsidian vault that I want to publish

`rsync -av --exclude=".*" --delete "/path/to/obsidian/vault" "/path/to/your/repo/src/content/notes/"`

I also created a zsh function called `publishnotes` that will copy then add commit and push the repo to deploy the site via CD here: [Deploy Gist](https://gist.github.com/OliverSpeir/b1e4210d6466b54a6b7d29148deb4d96)


## References

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Deploy To GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Deploy To CloudFlare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
