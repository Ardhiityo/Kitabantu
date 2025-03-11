/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        popins: "Poppins, sans-serif",
      },
      colors: {
        primary: "#FE9AA0",
        secondary: "#FFE7E7",
      },
    },
  },
  plugins: [],
};
