/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    colors:{
      'dark' : '#B0578D',
      'light' : '#FFE4D6',
      'pink' : '#FACBEA',
      'dark-pink' : '#D988B9'

    },
    fontFamily:{
      cursive: "'Pacifico', cursive"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

