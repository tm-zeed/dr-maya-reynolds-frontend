/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-bg': '#F8F5F2',      // Primary background
        'moss-green': '#4A5D4E',   // Headings & Primary buttons
        'oak-accent': '#D1B894',   // Accents & Icons
        'charcoal': '#2C2C2C',     // Primary text
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}