module.exports = {
  purge: ["./**/*.tsx", "./**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        soapbox: "#8359fe",

        accent: {
          pink: "#f990c3",
          green: "#49e6a4",
          cyan: "#66eae0",
        },

        systemGrey: "#8e8e93",
        systemGrey2: { light: "#aeaeb2", dark: "#636366" },
        systemGrey3: { light: "#c7c7cc", dark: "#48484a" },
        systemGrey4: { light: "#d1d1d6", dark: "#3a3a3c" },
        systemGrey5: { light: "#e5e5ea", dark: "#2c2c2e" },
        systemGrey6: { light: "#f2f2f7", dark: "#1c1c1e" },
        systemRed: { light: "#ff3b30", dark: "#ff453a" },
        label: { light: "#3c3c43", dark: "#ebebf5" },

        social: { twitter: "#1DA1F2" },
        prose: { primary: "#111827", secondary: "#374151" },
      },
      textOpacity: {
        secondary: "0.6",
        tertiary: "0.3",
      },
      borderRadius: {
        button: "0.9375rem",
        room: "1.85rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
