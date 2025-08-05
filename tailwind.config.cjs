/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "from-rose-500",
    "via-pink-400",
    "to-sky-300",
    "bg-gradient-to-r",
  ],
  theme: {
    extend: {
      clipPath: {
        hexagon: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      },
      fontFamily: {
        heading: ["Roboto", "sans-serif"], // for h1-h6 or titles
        body: ["Barlow", "sans-serif"],    // for paragraph and normal text
      },
    },
  },
  plugins: [],
});
