/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url(./assets/images/hero.jpg)",
      'about': "url(https://res.cloudinary.com/dh4rm7b7b/image/upload/v1679732119/PVC-Pipe/PVC_Pipe-13-1_sejpxp.png)",
      'status': "url(./assets/images/header.png)",
      'status_mobile': "url(./assets/images/header_mobile.png)"
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'whiteText': '#ffffff', /* white text */
        'primary': '#009A49', /* primary green */
        'secondary': '#ECBB00', /* yellow text */
        'bgGreen': '#009A4901', /* background green */
        'lightYellow': '#FFF6DA', /* light yellow */
        'darkGrey': '#322F2F', /* dark grey */
        'lightGrey': '#009A491A', /* light grey */
        'almostWhite': '#F5F5F5', /*almost white */
        'greyText': '#4A4242', /* grey text*/
        'iconFindColor': '#308a69', /* icon find color*/
        'iconRequestColor': '#185e4d', /* icon request color */
        'iconDeliveryColor': '#077821', /* icon delivery color */
        'textInputColor': '#F0F8F5', /* text input color */
      },
      textDecorationThickness: {
        4: '4px',
      }
    },
  },
  plugins: [],
}
