/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../theme-presets")],
  content: [
    "./app/**/*.{js,jsx,md,mdx,ts,tsx}",
    "./components/**/*.{js,jsx,md,mdx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
    "./examples/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
};
