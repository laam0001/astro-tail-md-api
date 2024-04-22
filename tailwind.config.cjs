/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Prompt"', ...defaultTheme.fontFamily.sans],

        display: ['"Roboto"', "monospace"], // Adds a new `font-display` class
      },

      colors: {
        persianmosaic: {
          100: "#E8EFF0",
          200: "#BBCFD3",
          300: "#90B0B7",
          400: "#4E838E",
          500: "#196673",
          600: "#145863",
          700: "#0B3C45",
          800: "#072F36",
          900: "#02171B",
        },
      },
    },
  },
};
