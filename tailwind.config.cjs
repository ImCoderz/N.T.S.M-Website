/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "textcolor":'#6A82FB',
        "pinky":"#fc5c7d",
        "bgcolor":"#EEEDFF",
        "rosy":"#E376E2",
        "purple":"#8772E4",
        "orangy":"#ff4500",
        "redy":"#ff0000",
        "greeny":"#00ff00",
        "bgbook":"#C0A975",
        "textbook":"#847655",
      }
    },
  },
  plugins: [],
}
