/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#1fb6ff',
          900: '#1fb6ff'
        },
        white: '#1fb6ff',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
