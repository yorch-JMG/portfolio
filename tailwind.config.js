module.exports = {
	content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		colors: {
			'background' : '#22223B',
			'brown' : '#5e503f',
			'dark-navy-blue' : '#22333b',
			'harder-text-color' : '#c6ac8f',
			'base-text-color' : '#eae0d5'
		},
		extend: {
			fontFamily: {
				main: ['Rubik']
			}
		},
  },
  plugins: [],
}
