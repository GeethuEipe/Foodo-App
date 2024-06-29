/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
      center: true
    },
    extend: {
      fontFamily: {
        ribeye: ['Ribeye', 'cursive']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
