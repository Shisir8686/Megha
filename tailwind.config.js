/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        primary: "#4e88d4",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },

      screens: {
        xs: "500px",
      },
    },
  },
};
