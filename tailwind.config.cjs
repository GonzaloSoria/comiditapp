/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'first-color': '#57A83B',
			'second-color': '#F3B700'
		},
		fontSize: {
			'title-lg': ['80px', '83px']
		}
	},
	plugins: [],
}
