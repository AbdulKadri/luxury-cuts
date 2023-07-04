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
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

