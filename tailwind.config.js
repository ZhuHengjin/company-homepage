/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,ksx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#000000',
        'secondary': '#ffffff',
        'accent-blue': '#1B6398',
        'accent-gold': '#F0B358',
        'main-text': '##1D1D1F'
      },
    },
  },
  plugins: [],
}