/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#FB8B24'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        saira: ["Saira", "serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
})

