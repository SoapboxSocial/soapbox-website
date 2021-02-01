module.exports = {
  purge: ["./**/*.tsx", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#8359fe",
        social: {
          twitter: "#1DA1F2",
        },
        prose: {
          primary: "#111827",
          secondary: "#374151",
        },
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
