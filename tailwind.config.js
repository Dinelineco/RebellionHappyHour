/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flyerCream: '#fef9f1',
        flyerPurple: '#4c2d43',
        flyerTeal: '#6baabf',
        flyerRed: '#ad2337',
        flyerDarkRed: '#7b1120'
      },
      fontFamily: {
        amatic: ['"Amatic SC"', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
