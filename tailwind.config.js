module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      background: '#000000',
      brown: '#ffae00',
      'dark-navy-blue': '#22333b',
      'harder-text-color': '#ffee00',
      'base-text-color': 'white',
			'form-background' : '#3d3c3a'
    },
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1.3)',
          },
          '33%': {
            transform: 'translate(30px, -20px) scale(1.3)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(1.3)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1.3)',
          },
        },
      },
      fontFamily: {
        main: ['Rubik'],
      },
    },
  },
  plugins: [],
};
