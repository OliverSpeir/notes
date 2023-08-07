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
					'ul.contains-task-list': {
						listStyleType: 'none',
						marginLeft: "-2.45rem"
					  },
					  'ul.contains-task-list li.task-list-item input[type="checkbox"]': {
						marginRight: "0.8rem",
						width: "1.25rem",
						height: "1rem",
					  },
					  'ol.contains-task-list li.task-list-item input[type="checkbox"]': {
						marginRight: "0.8rem",
						width: "1.25rem",
						height: "1rem",
					  },
					},
				},
			}
		},
	},
	plugins: [require('@tailwindcss/typography'),  require("daisyui")],
}
