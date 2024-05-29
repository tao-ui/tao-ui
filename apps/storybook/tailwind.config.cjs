/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../theme-presets")],
  content: ["../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
};
