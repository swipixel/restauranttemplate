/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hungarian-red': '#CD212A',
        'hungarian-gold': '#FFD700',
        'warm-cream': '#FDF6E3',
        'forest-green': '#228B22',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};