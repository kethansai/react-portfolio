const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '1197px',
      lg: '1485px',
      xl: '1800px',
    },
    letterSpacing: {
      wide:'1rem',
    },
    extend: {
      colors: {
        'cyan': colors.cyan,
        'teal':colors.teal,
      },
      zIndex: {
        '100': '100',
        '1000':'1000'
      }
    },
  },
  plugins: [],
}