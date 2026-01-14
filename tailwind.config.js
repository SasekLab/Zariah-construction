/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gt-primary': '#E63946',
        'gt-secondary': '#1D1D1D',
        'gt-dark': '#0F172A',
        'gt-light': '#F8F9FA',
        'gt-gray': '#6C757D',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Oswald', 'sans-serif'],
      },
      spacing: {
        '70': '17.5rem',
        'mb-15': '0.9375rem',
        'mr-15': '0.9375rem',
      },
      animation: {
        'float-bob-x': 'float-bob-x 3s ease-in-out infinite',
        'img-custom-anim-right': 'img-custom-anim-right 1.5s ease-in-out',
        'img-custom-anim-left': 'img-custom-anim-left 1.5s ease-in-out',
        'animate-positive': 'animate-positive 2.6s',
      },
      keyframes: {
        'float-bob-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        'img-custom-anim-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50px)' },
        },
        'img-custom-anim-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50px)' },
        },
        'animate-positive': {
          '0%': { width: '0' },
          '100%': { width: 'var(--target-width)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1D1D1D 0%, #2D2D2D 100%)',
      },
    },
  },
  plugins: [],
}
