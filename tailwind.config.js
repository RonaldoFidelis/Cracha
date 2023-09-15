/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ["'Poppins', sans-serif"]
      },
      width: {
        'card': '330px'
      },
      height: {
        'card':'500px',
        'imgCard': '350px'
      }
    },
  },
  plugins: [],
}

