const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: "#ec4755",
        secondary: "#a12c34",
        tertiary: "#99a0a3",
        border: "#1a2e35",
        background: "#ffffff",
      },
      animation: {
        vote: "vote 1s ease-in-out",
      },
      keyframes: {
        vote: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-30deg)",
          },
          "75%": {
            transform: "rotate(30deg)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".transform-style-preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".hover\\:rotate-y-180:hover": {
          transform: "rotateY(180deg)",
        },
      });
    }),
  ],
};
