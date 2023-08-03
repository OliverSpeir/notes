/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  screens: {
			xl: '1150px'
		  },
		},
	  },
	plugins: [require('@tailwindcss/typography'),  require("daisyui")],
}
