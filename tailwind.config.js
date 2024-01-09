/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'prime': '#00DBEB'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}