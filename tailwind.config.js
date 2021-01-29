module.exports = {
  purge: ["./**/*.tsx", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#8359fe",
      },
      borderRadius: {
        room: "1.85rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
