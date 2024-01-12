/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00453e",
        secondary: "#195851",
        // yellow: "#ffd814",
        white: "#ffffff",
        black: "#000",
       
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif", "Arial"],
        poppins: ["Poppins", "sans-serif", "Arial"],
        sans: "sans-serif",
      },
    },
  },
  plugins: [],
}

