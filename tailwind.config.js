/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Peyda: "Peyda",
        PeydaBold: "PeydaBold",
      },
      screens: {
        'xs' : '520px' 
      }
    },
  },
  plugins: [],
}

