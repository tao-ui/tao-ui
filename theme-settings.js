const INIT_SETTINGS = {
  colorScales: {
    primary: {
      key: "primary",
      title: "Primary",
      defaultRgb: "57, 68, 156",
      foreground: "255, 255, 255",
      stops: [
        { key: "50", c: "bg-primary-50", rgb: "242, 245, 252" },
        { key: "100", c: "bg-primary-100", rgb: "225, 232, 248" },
        { key: "200", c: "bg-primary-200", rgb: "202, 215, 243" },
        { key: "300", c: "bg-primary-300", rgb: "165, 189, 235" },
        { key: "400", c: "bg-primary-400", rgb: "122, 155, 224" },
        { key: "500", c: "bg-primary-500", rgb: "91, 123, 214" },
        { key: "600", c: "bg-primary-600", rgb: "71, 96, 201" },
        { key: "700", c: "bg-primary-700", rgb: "61, 78, 184" },
        { key: "800", c: "bg-primary-800", rgb: "57, 68, 156" },
        { key: "900", c: "bg-primary-900", rgb: "49, 58, 119" },
        { key: "950", c: "bg-primary-950", rgb: "33, 38, 74" },
      ],
    },
    secondary: {
      key: "secondary",
      title: "Secondary",
      defaultRgb: "153, 131, 189",
      foreground: "255, 255, 255",
      stops: [
        { key: "50", c: "bg-secondary-50", rgb: "248, 247, 251" },
        { key: "100", c: "bg-secondary-100", rgb: "242, 240, 247" },
        { key: "200", c: "bg-secondary-200", rgb: "231, 227, 241" },
        { key: "300", c: "bg-secondary-300", rgb: "212, 205, 229" },
        { key: "400", c: "bg-secondary-400", rgb: "153, 131, 189" },
        { key: "500", c: "bg-secondary-500", rgb: "163, 143, 195" },
        { key: "600", c: "bg-secondary-600", rgb: "144, 117, 178" },
        { key: "700", c: "bg-secondary-700", rgb: "127, 98, 159" },
        { key: "800", c: "bg-secondary-800", rgb: "106, 82, 133" },
        { key: "900", c: "bg-secondary-900", rgb: "88, 69, 109" },
        { key: "950", c: "bg-secondary-950", rgb: "56, 44, 73" },
      ],
    },
    tertiary: {
      key: "tertiary",
      title: "Tertiary",
      defaultRgb: "207, 147, 193",
      foreground: "15, 15, 16",
      stops: [
        { key: "50", c: "bg-tertiary-50", rgb: "250, 245, 249" },
        { key: "100", c: "bg-tertiary-100", rgb: "246, 237, 244" },
        { key: "200", c: "bg-tertiary-200", rgb: "239, 219, 235" },
        { key: "300", c: "bg-tertiary-300", rgb: "227, 190, 219" },
        { key: "400", c: "bg-tertiary-400", rgb: "207, 147, 193" },
        { key: "500", c: "bg-tertiary-500", rgb: "191, 117, 172" },
        { key: "600", c: "bg-tertiary-600", rgb: "169, 89, 144" },
        { key: "700", c: "bg-tertiary-700", rgb: "144, 70, 119" },
        { key: "800", c: "bg-tertiary-800", rgb: "120, 60, 99" },
        { key: "900", c: "bg-tertiary-900", rgb: "102, 53, 85" },
        { key: "950", c: "bg-tertiary-950", rgb: "60, 27, 48" },
      ],
    },
    accent: {
      key: "accent",
      title: "Accent",
      defaultRgb: "243, 118, 91",
      foreground: "15, 15, 16",
      stops: [
        { key: "50", c: "bg-accent-50", rgb: "254, 244, 242" },
        { key: "100", c: "bg-accent-100", rgb: "253 ,232, 227" },
        { key: "200", c: "bg-accent-200", rgb: "253, 212, 203" },
        { key: "300", c: "bg-accent-300", rgb: "250, 182, 167" },
        { key: "400", c: "bg-accent-400", rgb: "243, 118, 91" },
        { key: "500", c: "bg-accent-500", rgb: "235, 101, 72" },
        { key: "600", c: "bg-accent-600", rgb: "216, 73, 42" },
        { key: "700", c: "bg-accent-700", rgb: "216, 73, 42" },
        { key: "800", c: "bg-accent-800", rgb: "150, 51, 30" },
        { key: "900", c: "bg-accent-900", rgb: "125, 48, 31" },
        { key: "950", c: "bg-accent-950", rgb: "68, 21, 11" },
      ],
    },
    "neutral-cool": {
      key: "neutral-cool",
      title: "Neutral Cool",
      defaultRgb: "123, 121, 127",
      foreground: "255, 255, 255",
      stops: [
        { key: "50", c: "bg-neutral-cool-50", rgb: "237, 237, 237" },
        { key: "100", c: "bg-neutral-cool-100", rgb: "229, 228, 229" },
        { key: "200", c: "bg-neutral-cool-200", rgb: "217, 217, 217" },
        { key: "300", c: "bg-neutral-cool-300", rgb: "202, 201, 204" },
        { key: "400", c: "bg-neutral-cool-400", rgb: "163, 161, 165" },
        { key: "500", c: "bg-neutral-cool-500", rgb: "123, 121, 127" },
        { key: "600", c: "bg-neutral-cool-600", rgb: "111, 109, 114" },
        { key: "700", c: "bg-neutral-cool-700", rgb: "92, 91, 95" },
        { key: "800", c: "bg-neutral-cool-800", rgb: "74, 73, 76" },
        { key: "900", c: "bg-neutral-cool-900", rgb: "60, 59, 62" },
        { key: "950", c: "bg-neutral-cool-950", rgb: "38, 37, 39" },
      ],
    },
  },
  colorVars: {
    black: {
      DEFAULT: "15, 15, 16",
    },
    white: {
      DEFAULT: "255, 255, 255",
    },
    page: {
      DEFAULT: "237, 237, 237, .5",
      foreground: "15, 15, 16",
      hint: "163, 161, 165",
    },
    surface: {
      DEFAULT: "229, 228, 229, .5",
      foreground: "15, 15, 16",
      hint: "163, 161, 165",
    },
    raised: {
      DEFAULT: "217, 217, 217, .5",
      foreground: "15, 15, 16",
      hint: "123, 121, 127",
    },
    "btn-primary": {
      DEFAULT: "15, 15, 16",
      foreground: "255,255,255",
      hover: "22, 19, 20, .6",
    },
    "btn-primary-ghost": {
      DEFAULT: "22, 19, 20, .3",
      hover: "22, 19, 20, .05",
      foreground: "15, 15, 16",
    },
    "btn-secondary": {
      DEFAULT: "57, 68, 156",
      foreground: "255,255,255",
      hover: "57, 68, 156, 0.6",
    },
    "btn-secondary-ghost": {
      DEFAULT: "57, 68, 156, .3",
      foreground: "57, 68, 156",
      hover: "57, 68, 156, .05",
    },
    "chip-primary": {
      DEFAULT: "217, 217, 217",
      foreground: "22, 19, 20",
      hover: "217, 217, 217, .6",
    },
    checkbox: {
      DEFAULT: "202, 201, 204",
    },
  },
  borderColor: {
    "btn-primary-ghost": "22, 19, 20",
    "btn-secondary-ghost": "57, 68, 156",
    checkbox: "163, 161, 165",
    chip: "111, 109, 114",
    raised: "202,201,204",
    surface: "217,217,217",
  },
  borderRadius: {
    btn: "9999px",
    color: "9999px",
    input: "9999px",
  },
  borderWidth: {
    btn: "2px",
    input: "2px",
  },
  boxShadow: {
    area: "0 2px 4px 0 22, 19, 20 / 0.1;",
    el: "0 1px 2px 0 22, 19, 20 / 0.1;",
  },
  fontFamily: {
    sans: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ],
    body: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ],
    mono: [
      "var(--font-roboto-mono)",
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace",
    ],
  },
  fontSize: {
    "btn-lg": "1.125rem",
    "btn-sm": "1rem",
    btn: "1rem",
    input: "1rem",
  },
  height: {
    "btn-icon": "2.25rem",
    "btn-lg": "3.375rem",
    "btn-sm": "2.125rem",
    btn: "2.625rem",
    chip: "1.75rem",
    checkbox: "2.5rem",
  },
  padding: {
    "btn-lg": ".5rem 1.5rem",
    "btn-sm": ".5rem 1rem",
    btn: ".5rem 1.25rem",
    chip: ".5rem .625rem",
    input: ".875rem 1.375rem",
  },
  spacing: {
    btn: ".5rem",
    chip: "0rem",
    input: ".875rem",
  },
  width: {
    "btn-icon": "2.25rem",
    "chip-icon": "1rem",
    "input-icon": "1rem",
    checkbox: "2.5rem",
  },
};

const SETTINGS_OPTS = {
  colors: {
    primary: {
      DEFAULT: "var(--color-primary)",
      50: "var(--color-primary-50)",
      100: "var(--color-primary-100)",
      200: "var(--color-primary-200)",
      300: "var(--color-primary-300)",
      400: "var(--color-primary-400)",
      500: "var(--color-primary-500)",
      600: "var(--color-primary-600)",
      700: "var(--color-primary-700)",
      800: "var(--color-primary-800)",
      900: "var(--color-primary-900)",
      950: "var(--color-primary-950)",
      foreground: "var(--color-primary-foreground)",
    },
    secondary: {
      DEFAULT: "var(--color-secondary)",
      50: "var(--color-secondary-50)",
      100: "var(--color-secondary-100)",
      200: "var(--color-secondary-200)",
      300: "var(--color-secondary-300)",
      400: "var(--color-secondary-400)",
      500: "var(--color-secondary-500)",
      600: "var(--color-secondary-600)",
      700: "var(--color-secondary-700)",
      800: "var(--color-secondary-800)",
      900: "var(--color-secondary-900)",
      950: "var(--color-secondary-950)",
      foreground: "var(--color-secondary-foreground)",
    },
    tertiary: {
      DEFAULT: "var(--color-tertiary)",
      50: "var(--color-tertiary-50)",
      100: "var(--color-tertiary-100)",
      200: "var(--color-tertiary-200)",
      300: "var(--color-tertiary-300)",
      400: "var(--color-tertiary-400)",
      500: "var(--color-tertiary-500)",
      600: "var(--color-tertiary-600)",
      700: "var(--color-tertiary-700)",
      800: "var(--color-tertiary-800)",
      900: "var(--color-tertiary-900)",
      950: "var(--color-tertiary-950)",
      foreground: "var(--color-tertiary-foreground)",
    },
    accent: {
      DEFAULT: "var(--color-accent)",
      50: "var(--color-accent-50)",
      100: "var(--color-accent-100)",
      200: "var(--color-accent-200)",
      300: "var(--color-accent-300)",
      400: "var(--color-accent-400)",
      500: "var(--color-accent-500)",
      600: "var(--color-accent-600)",
      700: "var(--color-accent-700)",
      800: "var(--color-accent-800)",
      900: "var(--color-accent-900)",
      950: "var(--color-accent-950)",
      foreground: "var(--color-accent-foreground)",
    },
    "accent-secondary": {
      DEFAULT: "var(--color-accent-secondary)",
      50: "var(--color-accent-secondary-50)",
      100: "var(--color-accent-secondary-100)",
      200: "var(--color-accent-secondary-200)",
      300: "var(--color-accent-secondary-300)",
      400: "var(--color-accent-secondary-400)",
      500: "var(--color-accent-secondary-500)",
      600: "var(--color-accent-secondary-600)",
      700: "var(--color-accent-secondary-700)",
      800: "var(--color-accent-secondary-800)",
      900: "var(--color-accent-secondary-900)",
      950: "var(--color-accent-secondary-950)",
      foreground: "var(--color-accent-secondary-foreground)",
    },
    neutral: {
      DEFAULT: "var(--color-neutral)",
      50: "var(--color-neutral-50)",
      100: "var(--color-neutral-100)",
      200: "var(--color-neutral-200)",
      300: "var(--color-neutral-300)",
      400: "var(--color-neutral-400)",
      500: "var(--color-neutral-500)",
      600: "var(--color-neutral-600)",
      700: "var(--color-neutral-700)",
      800: "var(--color-neutral-800)",
      900: "var(--color-neutral-900)",
      950: "var(--color-neutral-950)",
      foreground: "var(--color-neutral-foreground)",
    },
    "neutral-cool": {
      DEFAULT: "var(--color-neutral-cool)",
      50: "var(--color-neutral-cool-50)",
      100: "var(--color-neutral-cool-100)",
      200: "var(--color-neutral-cool-200)",
      300: "var(--color-neutral-cool-300)",
      400: "var(--color-neutral-cool-400)",
      500: "var(--color-neutral-cool-500)",
      600: "var(--color-neutral-cool-600)",
      700: "var(--color-neutral-cool-700)",
      800: "var(--color-neutral-cool-800)",
      900: "var(--color-neutral-cool-900)",
      950: "var(--color-neutral-cool-950)",
      foreground: "var(--color-neutral-cool-foreground)",
    },
    "neutral-warm": {
      DEFAULT: "var(--color-neutral-warm)",
      50: "var(--color-neutral-warm-50)",
      100: "var(--color-neutral-warm-100)",
      200: "var(--color-neutral-warm-200)",
      300: "var(--color-neutral-warm-300)",
      400: "var(--color-neutral-warm-400)",
      500: "var(--color-neutral-warm-500)",
      600: "var(--color-neutral-warm-600)",
      700: "var(--color-neutral-warm-700)",
      800: "var(--color-neutral-warm-800)",
      900: "var(--color-neutral-warm-900)",
      950: "var(--color-neutral-warm-950)",
      foreground: "var(--color-neutral-warm-foreground)",
    },
    destructive: {
      DEFAULT: "var(--color-destructive)",
      50: "var(--color-destructive-50)",
      100: "var(--color-destructive-100)",
      200: "var(--color-destructive-200)",
      300: "var(--color-destructive-300)",
      400: "var(--color-destructive-400)",
      500: "var(--color-destructive-500)",
      600: "var(--color-destructive-600)",
      700: "var(--color-destructive-700)",
      800: "var(--color-destructive-800)",
      900: "var(--color-destructive-900)",
      950: "var(--color-destructive-950)",
      foreground: "var(--color-destructive-foreground)",
    },
    success: {
      DEFAULT: "var(--color-success)",
      50: "var(--color-success-50)",
      100: "var(--color-success-100)",
      200: "var(--color-success-200)",
      300: "var(--color-success-300)",
      400: "var(--color-success-400)",
      500: "var(--color-success-500)",
      600: "var(--color-success-600)",
      700: "var(--color-success-700)",
      800: "var(--color-success-800)",
      900: "var(--color-success-900)",
      950: "var(--color-success-950)",
      foreground: "var(--color-success-foreground)",
    },
    warning: {
      DEFAULT: "var(--color-warning)",
      50: "var(--color-warning-50)",
      100: "var(--color-warning-100)",
      200: "var(--color-warning-200)",
      300: "var(--color-warning-300)",
      400: "var(--color-warning-400)",
      500: "var(--color-warning-500)",
      600: "var(--color-warning-600)",
      700: "var(--color-warning-700)",
      800: "var(--color-warning-800)",
      900: "var(--color-warning-900)",
      950: "var(--color-warning-950)",
      foreground: "var(--color-warning-foreground)",
    },
    error: {
      DEFAULT: "var(--color-error)",
      50: "var(--color-error-50)",
      100: "var(--color-error-100)",
      200: "var(--color-error-200)",
      300: "var(--color-error-300)",
      400: "var(--color-error-400)",
      500: "var(--color-error-500)",
      600: "var(--color-error-600)",
      700: "var(--color-error-700)",
      800: "var(--color-error-800)",
      900: "var(--color-error-900)",
      950: "var(--color-error-950)",
      foreground: "var(--color-error-foreground)",
    },
    black: {
      DEFAULT: "var(--color-black)",
    },
    white: {
      DEFAULT: "var(--color-white)",
    },
    page: {
      DEFAULT: "var(--color-page)",
      foreground: "var(--color-page-foreground)",
      hint: "var(--color-page-hint)",
    },
    surface: {
      DEFAULT: "var(--color-surface)",
      hint: "var(--color-surface-hint)",
    },
    raised: {
      DEFAULT: "var(--color-raised)",
      hint: "var(--color-raised-hint)",
    },
    "btn-primary": {
      DEFAULT: "var(--color-btn-primary)",
      foreground: "var(--color-btn-primary-foreground)",
      hover: "var(--color-btn-primary-hover)",
    },
    "btn-primary-ghost": {
      DEFAULT: "var(--color-btn-primary-ghost)",
      hover: "var(--color-btn-primary-ghost-hover)",
      foreground: "var(--color-btn-primary-ghost-foreground)",
    },
    "btn-secondary": {
      DEFAULT: "var(--color-btn-secondary)",
      foreground: "var(--color-btn-secondary-foreground)",
      hover: "var(--color-btn-secondary-hover)",
    },
    "btn-secondary-ghost": {
      DEFAULT: "var(--color-btn-secondary-ghost)",
      foreground: "var(--color-btn-secondary-ghost-foreground)",
      hover: "var(--color-btn-secondary-ghost-hover)",
    },
    "chip-primary": {
      DEFAULT: "var(--color-chip-primary)",
      foreground: "var(--color-chip-primary-foreground)",
      hover: "var(--color-chip-primary-hover)",
    },
  },
  borderColor: {
    "btn-primary-ghost": "var(--border-btn-primary-ghost)",
    "btn-secondary-ghost": "var(--border-btn-secondary-ghost)",
    surface: "var(--border-surface)",
    raised: "var(--border-raised)",
  },
  borderRadius: {
    btn: "var(--rounded-btn)",
    color: "var(--rounded-color)",
    input: "var(--rounded-input)",
  },
  borderWidth: {
    btn: "var(--border-btn)",
    input: "var(--border-input)",
  },
  boxShadow: {
    area: "var(--box-shadow-area)",
    el: "var(--box-shadow-el)",
  },
  fontSize: {
    "btn-lg": "var(--font-size-btn-lg)",
    "btn-sm": "var(--font-size-btn-sm)",
    btn: "var(--font-size-btn)",
    input: "var(--font-size-input)",
  },
  height: {
    "btn-icon": "var(--height-btn-icon)",
    "btn-lg": "var(--height-btn-lg)",
    "btn-sm": "var(--height-btn-sm)",
    btn: "var(--height-btn)",
    chip: "var(--height-chip)",
  },
  width: {
    "btn-icon": "var(--width-btn-icon)",
    "chip-icon": "var(--width-chip-icon)",
    "input-icon": "var(--width-input-icon)",
  },
  padding: {
    "btn-lg": "var(--padding-btn-lg)",
    "btn-sm": "var(--padding-btn-sm)",
    btn: "var(--padding-btn)",
    chip: "var(--padding-chip)",
    input: "var(--padding-input)",
  },
  spacing: {
    btn: "var(--spacing-btn)",
    chip: "var(--spacing-chip)",
    input: "var(--spacing-input)",
  },
  fontFamily: {
    sans: "var(--font-sans)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },
};

export { SETTINGS_OPTS, INIT_SETTINGS };
