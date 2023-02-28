/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#009A49', /* primary green */
      'secondary': '#ECBB00', /* yellow text */
      'bgGreen': '#009A4901', /* background green */
      'lightYellow': '#FFF6DA', /* light yellow */
      'darkGrey': '#322F2F', /* dark grey */
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
