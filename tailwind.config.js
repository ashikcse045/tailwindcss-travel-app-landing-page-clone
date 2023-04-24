/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container:{
      center: true
    },
    extend: {
      fontFamily:{
        roboto: "'Roboto', sans-serif",
        popins: "'Poppins', sans-serif",
        fancy: "'Courgette', cursive"
      },
      colors:{
        primary: '#FF4A52',
        secondary: '#1EC6B6',
        tertiary: '#040E27'
      }
    },
  },
  plugins: [],
}

