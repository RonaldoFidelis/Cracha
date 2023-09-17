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
        'md-card': '350px',
        'card': '200px'
      },
      height: {
        'md-card':'400px',
        'md-imgCard': '350px',
        'content':'100px',
        'imgCard':'370px'
      }
    },
  },
  plugins: [],
}

