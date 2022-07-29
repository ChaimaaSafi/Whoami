/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["'Poppins'", 'sans-serif'],
			},
			colors: {
				white: {
					1: '#fffdfb',
				},
				grey: {
					1: '#606470',
				},
			},
		},
	},
	plugins: [],
}
