const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        success: colors.lime,
        error: colors.red,
        primary: colors.rose,
        gray: colors.blueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
