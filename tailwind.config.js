/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add ALL of these:
        'dark-bg': '#0a0a0a',
        'dark-blue': '#1a1d29',
        'navy': '#0f1419',
        'electric-blue': '#2196f3',
        'cyan': '#00d9ff',           // ← YOUR MAIN COLOR!
        'ice-blue': '#4dd0e1',
        'steel-blue': '#607d8b',
        'off-white': '#f5f5f5',      // ← CRITICAL FOR NAV LINKS!
        'light-gray': '#b0b0b0',
        'medium-gray': '#6b6b6b',
        'dark-gray': '#1f1f1f',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        accent: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}