module.exports = {
	content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		colors: {
			'background' : '#000000',
			'brown' : '#f5cf51',
			'dark-navy-blue' : '#22333b',
			'harder-text-color' : '#e3ae1e',
			'base-text-color' : 'white'
		},
		extend: {
			fontFamily: {
				main: ['Rubik']
			}
		},
  },
  plugins: [],
}
