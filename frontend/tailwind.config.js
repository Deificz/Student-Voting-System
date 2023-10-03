/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-blue' : '#1a5fb4',
        'dirty-white' : '#1a5fb4',
        'color-green' : '#73DB6A',
        'color-red' : '#DB6A6A',
        'color-gray' : '#D9D9D9',
      },
      boxShadow:{
        'card' : '15px 15px 10px 0px rgba(0, 0, 0, 0.3)',
        'button' : '5px 5px 5px 0px rgba(0, 0, 0, 0.3)'
      },
      screens:{
        'sm_max': {'max': '700px'},
      }
    },
  },
  plugins: [],
}

