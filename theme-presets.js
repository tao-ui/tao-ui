// Writing out the tw stops because we can't dynamically generate tw classes like we can with css variables
const { SETTINGS_OPTS } = require("./theme-settings");

const TW_THEME_CONFIG = {
  theme: {
    extend: { ...SETTINGS_OPTS },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "input::-webkit-calendar-picker-indicator": {
          display: "none !important",
        },
        select: {
          appearance: "none",
          "-webkit-appearance": "none",
          "-moz-appearance": "none",
          "background-image": "none",
        },
      });
    },
  ],
};

module.exports = TW_THEME_CONFIG;
