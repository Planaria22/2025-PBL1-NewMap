/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        mainColor: '#2496f3',
        darkColor: '#1769aa',
        lightColor: '#4dabf5'
      },
    },
  },
  plugins: [],
}

