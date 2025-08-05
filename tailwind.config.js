/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        chakra: ['"Chakra Petch"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        'gold': '#EDD899',
        'brown': '#AF5E00',
        'dark-grey': '#4E4E54'
      }
    },
    boxShadow: {
      'custom-drop': '4px 4px 2px 0 rgba(0, 0, 0, 0.25)',
    },
    screens: {
      se: '375px',
      promax: '430px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      'promax-only': { 'min': '430px', 'max': '450px' }
    },
    backgroundImage: {
      'custom-fade': `linear-gradient(
                      to right,
                      rgba(78, 78, 84, 0) 0%, 
                      #ADADBA 45%, 
                      rgba(78, 78, 84, 0) 99%
                      )`   ,
      'gradient-diagonal': 'linear-gradient(to bottom right, #FDCD9D, #F7EF82)',
      'gradient-diagonal-disabled': 'linear-gradient(to bottom right, #D0C8C0, #D4D3CC)'

    }
  },
  plugins: [],
};
