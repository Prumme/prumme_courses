/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#051823',
        'button-normal': '#C2E8F9',
        'button-alert': '#F9C2C2',
        'button-confirm': '#C2F9C7'

      },
    },
  },
  plugins: [],
}