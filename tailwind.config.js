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
      },
      colors: {
        'black':'#000000',
        'main':'#000C24',
        'second':'#011140',
        'ft':'#38B6FF',
        'border': '#016394',
        'git':'#9C34C2',
        'linkedin':'#0078D4'
      }
    },
  },
  plugins: [],
}

