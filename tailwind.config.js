/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark' : '#B0578D',
      'light' : '#FFE4D6'

    },
    fontFamily:{
      cursive: "'Pacifico', cursive"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

