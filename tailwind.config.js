/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs':{'max': '350px'},
      'sm': { 'max': '400px' },
      'xl': {'max': '430px'},
      '2xl': {'max': '600px'},
      '3xl': {'max': '768px'},
      '4xl': {'max': '1100px'}
  
    },
    container: {
      center: true,
      screens: {
        '2xl': '1920px',
      }
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inherit: ['Nunito', 'sans-serif']
      },
      colors: {
        'bgColor': '#B9C2A6',
        'contentColor': '#F5FaF3',
      },
    },
  },
  plugins: [],
}

