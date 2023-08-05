/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  screens: {
			xl: '1150px'
		  },
		  typography: {
			  DEFAULT: {
				  css: {
					'pre code span': {
						backgroundColor: "#1f2937",
					}
					},
				},
			}
		},
	},
	plugins: [require('@tailwindcss/typography'),  require("daisyui")],
}
