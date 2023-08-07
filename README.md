# Obsidian Notes

I created this Astro project to publish the notes I create in obsidian as websites. The goal when starting this project was to be able to add the files I created with obsidian to the repo and push to deploy, without needing to adjust frontmatter at all.

There is one optional frontmatter property built in called footer, which will put a footer at the bottom with social links.

Include `footer: "true"` in the .md files frontmatter and it will render. 


## Lighthouse

![lighthouse score](https://i.ibb.co/Z26n1m3/Screenshot-2023-08-07-at-5-21-45-PM.png)

## Tech Used

Astro (content collections)
Tailwind and Tailwind Typography
Rehype plugin (for accessibility tweaks)

## Deploy your own

I used CloudFlare Pages, but any static site service will work. I have included the Github Action created by Astro to deploy via GitHub Pages if you want, all you have to do is have the repo deploy via Actions and set the `base:` in `astro.config.mjs`

1. In the `astro.config.mjs` file set the site to your deployed URL
2. In `/src/components/Footer.astro` change the links from example.com to your socials
3. Put any .md or .mdx file you want to publish in `/src/content/notes/`
4. Deploy with your favorite service (Netlify, CF Pages, Vercel, Github Pages, etc...)

For a lot of services they won't give you a URL until you connect a repo and deploy it, in this case just deploy without setting the `site: ` in the astro config then get the deployed URL and then update the config and push to redeploy

## Structure

Every note that is in the same directory will be linked together as "Related"

- For example `/content/notes/example.md` will be linked with `/content/notes/example2.md` as will `/content/notes/example/example.md` and `/content/notes/example/example2.md`

Every <h2> or `##` with markdown will be considered a `Heading` and get listed in the menu, no other subheadings will be included in the headings

## How I connected Obsidian

I created a zsh alias for copying the notes in my Obsidian vault that I want to publish

`rsync -av --exclude=".*" --delete "/path/to/obsidian/vault" "/path/to/your/repo/src/content/notes/"`

I also created a zsh function called `publishnotes` that will copy then add commit and push the repo to deploy the site via CD here: [Deploy Gist](https://gist.github.com/OliverSpeir/b1e4210d6466b54a6b7d29148deb4d96)

## How the styles work

I made use of the tailwind config file to customize the typography for the footnote links, and the checkboxes ( `[ x ]` in markdown)

I used `styles.css` to make the scrollbars always visible on the menus and codeblocks as well as changing the codeblock styles ( because utility classes didn't let me select the code elements seperately when they were children of pre elements )

Everything else uses tailwind utility classes 

## References

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- [Deploy To GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Deploy To CloudFlare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
