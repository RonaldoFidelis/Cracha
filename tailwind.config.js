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
        '90px':'92px',
        'larguraMd':'110px',
        '50px':'50px'
      },
      height: {
        '90px':'92px',
        'alturaMd':'110px',
        '50px':'50px'
      }
    },
  },
  plugins: [],
}

