/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red': {
          500: '#FF4A4A', // Main red
          600: '#E03A3A', // Darker red
        },
        'green': {
          400: '#B3E283', // Pastel green
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};