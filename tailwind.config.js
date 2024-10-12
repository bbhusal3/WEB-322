/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './views/home.html', // Adjust this path based on your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["fantasy"],  // You can choose a different theme if you'd like
  },
}
