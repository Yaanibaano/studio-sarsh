/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#c9a96e',
        'warm-white': '#faf9f7',
        'primary-black': '#1a1a1a',
        'medium-gray': '#6b6b6b',
        'light-gray': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
