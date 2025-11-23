/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        primaryDark: '#de86f00',
        lightOrange: "#f1dabf",
        darkGray: "1a1f25",
        lightGray: "272c35",
        secondary: '#64748b'
      },
      container: {
        center: true,
        padding: '1rem',
        sm: "2rem",
      },
      maskImage: {
        'fade-bottom': 'linear-gradient(to bottom, black, transparent)',
      }
    },
  },
  plugins: [],
}