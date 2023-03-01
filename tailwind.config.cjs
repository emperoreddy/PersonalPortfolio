/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      amatic: ["'Amatic SC'", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "gradient": "gradient 1s linear infinite",
      },

      

      colors: {
        button: "#3800D6",
      },
    },
  },
  plugins: [],
};
