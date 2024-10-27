/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        // You can add other font families here if needed
      },
      flex: {
        1: "1 1 0%",
        2: "2 1 0%",
        3: "3 1 0%",
        4: "4 1 0%",
        5: "5 1 0%",
        6: "6 1 0%",
        7: "7 1 0%",
        8: "8 1 0%",
        9: "9 1 0%",
        10: "10 1 0%",
        11: "11 1 0%",
        12: "12 1 0%",
      },
    },
  },
  plugins: [],
};
