/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/*.{js,jsx,ts,tsx}", "./screens/*.{js,jsx,ts,tsx}" , "./components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gold': '#E6C466',
        'dark-grey': '#19191C',
        'light-grey': '#8D8D9C',
        'med-grey': '#232329',
      },
    },
  },
  plugins: [],
}
