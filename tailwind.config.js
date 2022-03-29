module.exports = {
	content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		colors: {
			'background' : '#000000',
			'brown' : '#ffae00',
			'dark-navy-blue' : '#22333b',
			'harder-text-color' : '#ffee00',
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
