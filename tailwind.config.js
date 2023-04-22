/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:  theme =>({
        'back-img':"url('./src/components/FoodSection/images (2).jpeg)",
      })
    },
  },
  plugins: [],
}

