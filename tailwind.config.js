const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  daisyui: {
    styled: true,
    themes: [
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      print: { raw: "print" },
      xsm: "500px",
      sm: "640px",
      md: "833px",
      lg: "1079.5px",
      xl: "1280px",
    },
    extend: {
      animation: {
        type: "type 2.7s ease-out .8s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(6ch)" },
          "65%, 70%": { transform: "translateX(7ch)" },
          "75%, 80%": { transform: "translateX(8ch)" },
          "85%, 90%": { transform: "translateX(9ch)" },
          "95%, 100%": { transform: "translateX(11ch)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-hero-patterns"),
    require("daisyui"),
    require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ["polka-dots", "signal", "topography", "circuitboard"],

      // The foreground colors of the pattern
      colors: {
        default: "#9C92AC",
        "blue-dark": "#000044", //also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: "0.4",
        100: "1.0",
      },
    }),
  ],
};
