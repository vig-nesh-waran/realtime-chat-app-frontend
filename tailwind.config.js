/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#3a3a3a',
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
        orange: {
          500: '#f97316',
          600: '#e65e0d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

