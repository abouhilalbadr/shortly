/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          violet: 'hsl(257, 27%, 26%)',
          gray: 'hsl(231 30% 95%)'
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)'
        },
        neutral: {
          gray: 'hsl(0, 0%, 75%)',
          grayish: 'hsl(257, 7%, 63%)',
          blue: 'hsl(255, 11%, 22%)',
          violet: 'hsl(260, 8%, 14%)',
        }
      }
    },
    container: {
      center: true,
      default: "1rem",
      sm: "2rem",
      lg: "3rem",
      xl: "4rem",
    },
  },
  plugins: [],
}
