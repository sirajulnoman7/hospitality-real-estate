/** @type {import('tailwindcss').Config} */
import img from './src/assets/david-samuel-levinson-lqqUCTcQsXw-unsplash.jpg'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    }
  },
  plugins: [
    require('daisyui'),
  ],
}

