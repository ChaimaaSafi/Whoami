/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				poppins: ["'Poppins'", 'sans-serif'],
			},
			colors: {
				white: {
					1: '#fffdfb',
				},
				gray: {
					1: '#606470',
					2: '#323643',
					3: '#5f6769',
				},
				orange: {
					1: '#F66C22',
				},
			},
		},
	},
	plugins: [],
}
