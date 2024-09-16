/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: { 
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
}
