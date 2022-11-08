/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-slate': '#3E4057',
        'red': '#D11515',
        'light': 'rgba(202, 202, 202, 0.8)',
        'card':'#56586E',
        'teal':'#4CF3CB',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'outfit-light': ['Outfit-Light', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
