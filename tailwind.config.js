/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-Cyan": "hsl(193, 38%, 86%)",
        "neon-Green": "hsl(150, 100%, 66%)",
        "grayish-Blue1": "hsl(217, 19%, 38%)",
        "grayish-Blue2": "hsl(217, 19%, 24%)",
        "dark-Blue": "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
