/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'carousel': '18.875rem'
      },
      width: {
        'carousel': '75.5rem'
      },
    },
  },
  plugins: [],
}