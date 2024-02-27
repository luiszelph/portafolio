/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: {max : '639px'},
      md: {max : '757px'},
      lg: {max : '1023px'},
      xl: {max : '1279px'},
      '2x1': {max : '1535px'}
    },
  },
  plugins: [],
}

