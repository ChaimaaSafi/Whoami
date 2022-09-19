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
					4: '#D5DBDB',
					5: '#273746',
				},
				orange: {
					1: '#F66C22',
				},
			},
		},
	},
	plugins: [],
}
