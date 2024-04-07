/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Karlar: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744838",
        },
        background: {
          1: "#F6F6F6",
        }
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown .2s linear",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": "url('./img/slider_bg.jpg')",
      },
    },
  },
  plugins: [],
};
