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
					'a.data-footnote-backref': {
						textDecoration: 'none',
						'&:hover': {
						  textDecoration: 'none',
						},
					},
					  'ul.contains-task-list li.task-list-item input[type="checkbox"]': {
						marginRight: "0.8rem",
						width: "1.25rem",
						height: "1rem",
						marginBottom: "0rem !important",
						marginTop: "0rem !important"
					  },
					  'ol.contains-task-list li.task-list-item input[type="checkbox"]': {
						marginRight: "0.8rem",
						width: "1.25rem",
						height: "1rem",
						marginBottom: "0rem !important",
						marginTop: "0rem !important"
					  },
					},
				},
			}
		},
	},
	plugins: [require('@tailwindcss/typography'),  require("daisyui")],
}
