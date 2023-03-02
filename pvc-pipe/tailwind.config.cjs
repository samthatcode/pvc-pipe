/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url(./assets/images/hero.png)",

    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#009A49', /* primary green */
        'secondary': '#ECBB00', /* yellow text */
        'bgGreen': '#009A4901', /* background green */
        'lightYellow': '#FFF6DA', /* light yellow */
        'darkGrey': '#322F2F', /* dark grey */
        'lightGrey': '#009A491A', /* light grey */
      },
      textDecorationThickness: {
        4: '4px',
      }
    },
  },
  plugins: [],
}
