/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dakingo-main': '#852222',
        'dakingo-dark': '#6E1B1B',
        'dakingo-bg': '#FFF7F3',
        'dakingo-card': '#FFFFFF',
        'dakingo-cream': '#FFF2EC',
        'dakingo-border': '#F2D8CD',
        'dakingo-gold': '#EBB85A',
      },
    },
  },
  plugins: [],
}