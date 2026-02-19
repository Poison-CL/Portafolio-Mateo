/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Space Grotesk"', 'sans-serif'],
				mono: ['"Space Mono"', 'monospace'],
			},
			colors: {
				paper: '#f4f4f5',
				ink: '#111',
				'accent-gray': '#e4e4e7',
			},
			boxShadow: {
				'hard': '4px 4px 0px 0px #000',
			},
		},
	},
	plugins: [],
}
