module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#b5d335",
      },
      keyframes: {
        wave: {
          "0%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "waving-hand": "wave 50s infinite",
      },
    },
  },
  plugins: [],
};
