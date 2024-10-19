/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#141B29',
        'dark-gray': '#202634',
        'light-gray': '#A6A6A6',
        'light-purple': '#8D57FA'
      }
    },
  },
  plugins: [],
}