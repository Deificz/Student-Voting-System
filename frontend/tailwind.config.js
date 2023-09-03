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
        'color-green' : '73DB6A',
        'color-red' : '73DB6A'
      },
      boxShadow:{
        'card' : '15px 15px 10px 0px rgba(0, 0, 0, 0.3)',
        'button' : '5px 5px 5px 0px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

