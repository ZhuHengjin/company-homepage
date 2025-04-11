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
        'main-text': '#1D1D1F'
      },
      animation: {
        'slideDown': 'slideDown 0.2s ease-in-out forwards',
        'slideUp': 'slideUp 0.2s ease-in-out forwards'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-10%)', opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}