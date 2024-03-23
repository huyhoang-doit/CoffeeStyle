/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karlar: ["Karla", "sans-serif"],
      },
      colors: {
        "light-coffee": "#C89F94",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown .2s linear",
      },
      backgroundImage: {
        "slider-bg": "url('./img/slider_bg.jpg')",
      },
    },
  },
  plugins: [],
};
