/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#36213E',
        'secondary': '#554971 ',
        'background-primary': '#FFFFFF',
        'background-secondary': '#554971',
        'text-primary': '#000000',
        'text-secondary': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

