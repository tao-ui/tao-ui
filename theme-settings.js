import { check } from "prettier";

const INIT_SETTINGS = {
  colorScales: {
    primary: {
      key: "primary",
      title: "Primary",
      defaultRgb: "57 68 156",
      foreground: "255 255 255",
      stops: [
        { key: "50", c: "bg-primary-50", rgb: "242 245 252" },
        { key: "100", c: "bg-primary-100", rgb: "225 232 248" },
        { key: "200", c: "bg-primary-200", rgb: "202 215 243" },
        { key: "300", c: "bg-primary-300", rgb: "165 189 235" },
        { key: "400", c: "bg-primary-400", rgb: "122 155 224" },
        { key: "500", c: "bg-primary-500", rgb: "91 123 214" },
        { key: "600", c: "bg-primary-600", rgb: "71 96 201" },
        { key: "700", c: "bg-primary-700", rgb: "61 78 184" },
        { key: "800", c: "bg-primary-800", rgb: "57 68 156" },
        { key: "900", c: "bg-primary-900", rgb: "49 58 119" },
        { key: "950", c: "bg-primary-950", rgb: "33 38 74" },
      ],
    },
    secondary: {
      key: "secondary",
      title: "Secondary",
      defaultRgb: "153 131 189",
      foreground: "255 255 255",
      stops: [
        { key: "50", c: "bg-secondary-50", rgb: "248 247 251" },
        { key: "100", c: "bg-secondary-100", rgb: "242 240 247" },
        { key: "200", c: "bg-secondary-200", rgb: "231 227 241" },
        { key: "300", c: "bg-secondary-300", rgb: "212 205 229" },
        { key: "400", c: "bg-secondary-400", rgb: "153 131 189" },
        { key: "500", c: "bg-secondary-500", rgb: "163 143 195" },
        { key: "600", c: "bg-secondary-600", rgb: "144 117 178" },
        { key: "700", c: "bg-secondary-700", rgb: "127 98 159" },
        { key: "800", c: "bg-secondary-800", rgb: "106 82 133" },
        { key: "900", c: "bg-secondary-900", rgb: "88 69 109" },
        { key: "950", c: "bg-secondary-950", rgb: "56 44 73" },
      ],
    },
    tertiary: {
      key: "tertiary",
      title: "Tertiary",
      defaultRgb: "207 147 193",
      foreground: "var(--color-black)",
      stops: [
        { key: "50", c: "bg-tertiary-50", rgb: "250 245 249" },
        { key: "100", c: "bg-tertiary-100", rgb: "246 237 244" },
        { key: "200", c: "bg-tertiary-200", rgb: "239 219 235" },
        { key: "300", c: "bg-tertiary-300", rgb: "227 190 219" },
        { key: "400", c: "bg-tertiary-400", rgb: "207 147 193" },
        { key: "500", c: "bg-tertiary-500", rgb: "191 117 172" },
        { key: "600", c: "bg-tertiary-600", rgb: "169 89 144" },
        { key: "700", c: "bg-tertiary-700", rgb: "144 70 119" },
        { key: "800", c: "bg-tertiary-800", rgb: "120 60 99" },
        { key: "900", c: "bg-tertiary-900", rgb: "102 53 85" },
        { key: "950", c: "bg-tertiary-950", rgb: "60 27 48" },
      ],
    },
    accent: {
      key: "accent",
      title: "Accent",
      defaultRgb: "243 118 91",
      foreground: "var(--color-black)",
      stops: [
        { key: "50", c: "bg-accent-50", rgb: "254 244 242" },
        { key: "100", c: "bg-accent-100", rgb: "253 ,232, 227" },
        { key: "200", c: "bg-accent-200", rgb: "253 212 203" },
        { key: "300", c: "bg-accent-300", rgb: "250 182 167" },
        { key: "400", c: "bg-accent-400", rgb: "243 118 91" },
        { key: "500", c: "bg-accent-500", rgb: "235 101 72" },
        { key: "600", c: "bg-accent-600", rgb: "216 73 42" },
        { key: "700", c: "bg-accent-700", rgb: "216 73 42" },
        { key: "800", c: "bg-accent-800", rgb: "150 51 30" },
        { key: "900", c: "bg-accent-900", rgb: "125 48 31" },
        { key: "950", c: "bg-accent-950", rgb: "68 21 11" },
      ],
    },
    "neutral-cool": {
      key: "neutral-cool",
      title: "Neutral Cool",
      defaultRgb: "123 121 127",
      foreground: "255 255 255",
      stops: [
        { key: "50", c: "bg-neutral-cool-50", rgb: "237 237 237" },
        { key: "100", c: "bg-neutral-cool-100", rgb: "229 228 229" },
        { key: "200", c: "bg-neutral-cool-200", rgb: "217 217 217" },
        { key: "300", c: "bg-neutral-cool-300", rgb: "202 201 204" },
        { key: "400", c: "bg-neutral-cool-400", rgb: "163 161 165" },
        { key: "500", c: "bg-neutral-cool-500", rgb: "123 121 127" },
        { key: "600", c: "bg-neutral-cool-600", rgb: "111 109 114" },
        { key: "700", c: "bg-neutral-cool-700", rgb: "92 91 95" },
        { key: "800", c: "bg-neutral-cool-800", rgb: "74 73 76" },
        { key: "900", c: "bg-neutral-cool-900", rgb: "60 59 62" },
        { key: "950", c: "bg-neutral-cool-950", rgb: "38 37 39" },
      ],
    },
  },
  colorVars: {
    black: {
      DEFAULT: "15 15 16",
    },
    white: {
      DEFAULT: "255 255 255",
    },
    page: {
      DEFAULT: "247 247 247",
      foreground: "var(--color-black)",
    },
    surface: {
      DEFAULT: "var(--color-white)",
      foreground: "var(--color-black)",
    },
    raised: {
      DEFAULT: "var(--color-neutral-cool-50)",
      foreground: "var(--color-black)",
    },
    input: {
      DEFAULT: "var(--color-page)",
      foreground: "var(--color-black)",
      hint: "var(--color-neutral-cool)",
    },
    tab: {
      DEFAULT: "var(--color-raised)",
      active: "var(--color-surface)",
      content: "var(--color-surface)",
      foreground: "var(--color-black)",
    },
    "btn-primary": {
      DEFAULT: "var(--color-black)",
      foreground: "var(--color-white)",
      hover: "var(--color-black)",
    },
    "btn-primary-ghost": {
      DEFAULT: "var(--color-black)",
    },
    "btn-secondary": {
      DEFAULT: "var(--color-primary)",
      foreground: "var(--color-white)",
      hover: "var(--color-primary)",
    },
    "btn-secondary-ghost": {
      DEFAULT: "var(--color-primary)",
    },
    "chip-primary": {
      DEFAULT: "var(--color-surface)",
      foreground: "var(--color-black)",
    },
    checkbox: {
      DEFAULT: "202 201 204",
      border: "var(--color-neutral-cool-600)",
    },
  },
  borderColor: {
    raised: "var(--color-neutral-cool-100)",
    surface: "var(--color-raised)",
    "input-border": "var(--color-neutral-cool-300)",
  },
  borderRadius: {
    btn: "9999px",
    color: "9999px",
    input: "9999px",
    tab: "8px 8px 0 0",
    "tab-content": "0 8px 8px 8px",
    area: "8px",
  },
  borderWidth: {
    btn: "2px",
    input: "2px",
  },
  boxShadow: {
    area: "0 2px 4px 0 var(--color-black)) / 0.1;",
    el: "0 1px 2px 0 var(--color-black)) / 0.1;",
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
    input: "3rem",
    chip: "1.75rem",
    checkbox: "2.5rem",
    tab: "3rem",
  },
  padding: {
    "btn-lg": ".5rem 1.5rem",
    "btn-sm": ".5rem 1rem",
    btn: ".5rem 1.25rem",
    chip: ".5rem .625rem",
    input: ".5rem 1.375rem",
    tab: ".5rem 1.375rem",
  },
  spacing: {
    btn: ".5rem",
    chip: "0rem",
    input: ".875rem",
    tab: ".25rem",
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
      DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
      50: "rgb(var(--color-primary-50) / <alpha-value>)",
      100: "rgb(var(--color-primary-100) / <alpha-value>)",
      200: "rgb(var(--color-primary-200) / <alpha-value>)",
      300: "rgb(var(--color-primary-300) / <alpha-value>)",
      400: "rgb(var(--color-primary-400) / <alpha-value>)",
      500: "rgb(var(--color-primary-500) / <alpha-value>)",
      600: "rgb(var(--color-primary-600) / <alpha-value>)",
      700: "rgb(var(--color-primary-700) / <alpha-value>)",
      800: "rgb(var(--color-primary-800) / <alpha-value>)",
      900: "rgb(var(--color-primary-900) / <alpha-value>)",
      950: "rgb(var(--color-primary-950) / <alpha-value>)",
      foreground: "rgb(var(--color-primary-foreground) / <alpha-value>)",
    },
    secondary: {
      DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
      50: "rgb(var(--color-secondary-50) / <alpha-value>)",
      100: "rgb(var(--color-secondary-100) / <alpha-value>)",
      200: "rgb(var(--color-secondary-200) / <alpha-value>)",
      300: "rgb(var(--color-secondary-300) / <alpha-value>)",
      400: "rgb(var(--color-secondary-400) / <alpha-value>)",
      500: "rgb(var(--color-secondary-500) / <alpha-value>)",
      600: "rgb(var(--color-secondary-600) / <alpha-value>)",
      700: "rgb(var(--color-secondary-700) / <alpha-value>)",
      800: "rgb(var(--color-secondary-800) / <alpha-value>)",
      900: "rgb(var(--color-secondary-900) / <alpha-value>)",
      950: "rgb(var(--color-secondary-950) / <alpha-value>)",
      foreground: "rgb(var(--color-secondary-foreground) / <alpha-value>)",
    },
    tertiary: {
      DEFAULT: "rgb(var(--color-tertiary) / <alpha-value>)",
      50: "rgb(var(--color-tertiary-50) / <alpha-value>)",
      100: "rgb(var(--color-tertiary-100) / <alpha-value>)",
      200: "rgb(var(--color-tertiary-200) / <alpha-value>)",
      300: "rgb(var(--color-tertiary-300) / <alpha-value>)",
      400: "rgb(var(--color-tertiary-400) / <alpha-value>)",
      500: "rgb(var(--color-tertiary-500) / <alpha-value>)",
      600: "rgb(var(--color-tertiary-600) / <alpha-value>)",
      700: "rgb(var(--color-tertiary-700) / <alpha-value>)",
      800: "rgb(var(--color-tertiary-800) / <alpha-value>)",
      900: "rgb(var(--color-tertiary-900) / <alpha-value>)",
      950: "rgb(var(--color-tertiary-950) / <alpha-value>)",
      foreground: "rgb(var(--color-tertiary-foreground) / <alpha-value>)",
    },
    accent: {
      DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
      50: "rgb(var(--color-accent-50) / <alpha-value>)",
      100: "rgb(var(--color-accent-100) / <alpha-value>)",
      200: "rgb(var(--color-accent-200) / <alpha-value>)",
      300: "rgb(var(--color-accent-300) / <alpha-value>)",
      400: "rgb(var(--color-accent-400) / <alpha-value>)",
      500: "rgb(var(--color-accent-500) / <alpha-value>)",
      600: "rgb(var(--color-accent-600) / <alpha-value>)",
      700: "rgb(var(--color-accent-700) / <alpha-value>)",
      800: "rgb(var(--color-accent-800) / <alpha-value>)",
      900: "rgb(var(--color-accent-900) / <alpha-value>)",
      950: "rgb(var(--color-accent-950) / <alpha-value>)",
      foreground: "rgb(var(--color-accent-foreground) / <alpha-value>)",
    },
    "accent-secondary": {
      DEFAULT: "rgb(var(--color-accent-secondary) / <alpha-value>)",
      50: "rgb(var(--color-accent-secondary-50) / <alpha-value>)",
      100: "rgb(var(--color-accent-secondary-100) / <alpha-value>)",
      200: "rgb(var(--color-accent-secondary-200) / <alpha-value>)",
      300: "rgb(var(--color-accent-secondary-300) / <alpha-value>)",
      400: "rgb(var(--color-accent-secondary-400) / <alpha-value>)",
      500: "rgb(var(--color-accent-secondary-500) / <alpha-value>)",
      600: "rgb(var(--color-accent-secondary-600) / <alpha-value>)",
      700: "rgb(var(--color-accent-secondary-700) / <alpha-value>)",
      800: "rgb(var(--color-accent-secondary-800) / <alpha-value>)",
      900: "rgb(var(--color-accent-secondary-900) / <alpha-value>)",
      950: "rgb(var(--color-accent-secondary-950) / <alpha-value>)",
      foreground: "rgb(var(--color-accent-secondary-foreground) / <alpha-value>)",
    },
    neutral: {
      DEFAULT: "rgb(var(--color-neutral) / <alpha-value>)",
      50: "rgb(var(--color-neutral-50) / <alpha-value>)",
      100: "rgb(var(--color-neutral-100) / <alpha-value>)",
      200: "rgb(var(--color-neutral-200) / <alpha-value>)",
      300: "rgb(var(--color-neutral-300) / <alpha-value>)",
      400: "rgb(var(--color-neutral-400) / <alpha-value>)",
      500: "rgb(var(--color-neutral-500) / <alpha-value>)",
      600: "rgb(var(--color-neutral-600) / <alpha-value>)",
      700: "rgb(var(--color-neutral-700) / <alpha-value>)",
      800: "rgb(var(--color-neutral-800) / <alpha-value>)",
      900: "rgb(var(--color-neutral-900) / <alpha-value>)",
      950: "rgb(var(--color-neutral-950) / <alpha-value>)",
      foreground: "rgb(var(--color-neutral-foreground) / <alpha-value>)",
    },
    "neutral-cool": {
      DEFAULT: "rgb(var(--color-neutral-cool) / <alpha-value>)",
      50: "rgb(var(--color-neutral-cool-50) / <alpha-value>)",
      100: "rgb(var(--color-neutral-cool-100) / <alpha-value>)",
      200: "rgb(var(--color-neutral-cool-200) / <alpha-value>)",
      300: "rgb(var(--color-neutral-cool-300) / <alpha-value>)",
      400: "rgb(var(--color-neutral-cool-400) / <alpha-value>)",
      500: "rgb(var(--color-neutral-cool-500) / <alpha-value>)",
      600: "rgb(var(--color-neutral-cool-600) / <alpha-value>)",
      700: "rgb(var(--color-neutral-cool-700) / <alpha-value>)",
      800: "rgb(var(--color-neutral-cool-800) / <alpha-value>)",
      900: "rgb(var(--color-neutral-cool-900) / <alpha-value>)",
      950: "rgb(var(--color-neutral-cool-950) / <alpha-value>)",
      foreground: "rgb(var(--color-neutral-cool-foreground) / <alpha-value>)",
    },
    "neutral-warm": {
      DEFAULT: "rgb(var(--color-neutral-warm) / <alpha-value>)",
      50: "rgb(var(--color-neutral-warm-50) / <alpha-value>)",
      100: "rgb(var(--color-neutral-warm-100) / <alpha-value>)",
      200: "rgb(var(--color-neutral-warm-200) / <alpha-value>)",
      300: "rgb(var(--color-neutral-warm-300) / <alpha-value>)",
      400: "rgb(var(--color-neutral-warm-400) / <alpha-value>)",
      500: "rgb(var(--color-neutral-warm-500) / <alpha-value>)",
      600: "rgb(var(--color-neutral-warm-600) / <alpha-value>)",
      700: "rgb(var(--color-neutral-warm-700) / <alpha-value>)",
      800: "rgb(var(--color-neutral-warm-800) / <alpha-value>)",
      900: "rgb(var(--color-neutral-warm-900) / <alpha-value>)",
      950: "rgb(var(--color-neutral-warm-950) / <alpha-value>)",
      foreground: "rgb(var(--color-neutral-warm-foreground) / <alpha-value>)",
    },
    destructive: {
      DEFAULT: "rgb(var(--color-destructive) / <alpha-value>)",
      50: "rgb(var(--color-destructive-50) / <alpha-value>)",
      100: "rgb(var(--color-destructive-100) / <alpha-value>)",
      200: "rgb(var(--color-destructive-200) / <alpha-value>)",
      300: "rgb(var(--color-destructive-300) / <alpha-value>)",
      400: "rgb(var(--color-destructive-400) / <alpha-value>)",
      500: "rgb(var(--color-destructive-500) / <alpha-value>)",
      600: "rgb(var(--color-destructive-600) / <alpha-value>)",
      700: "rgb(var(--color-destructive-700) / <alpha-value>)",
      800: "rgb(var(--color-destructive-800) / <alpha-value>)",
      900: "rgb(var(--color-destructive-900) / <alpha-value>)",
      950: "rgb(var(--color-destructive-950) / <alpha-value>)",
      foreground: "rgb(var(--color-destructive-foreground) / <alpha-value>)",
    },
    success: {
      DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
      50: "rgb(var(--color-success-50) / <alpha-value>)",
      100: "rgb(var(--color-success-100) / <alpha-value>)",
      200: "rgb(var(--color-success-200) / <alpha-value>)",
      300: "rgb(var(--color-success-300) / <alpha-value>)",
      400: "rgb(var(--color-success-400) / <alpha-value>)",
      500: "rgb(var(--color-success-500) / <alpha-value>)",
      600: "rgb(var(--color-success-600) / <alpha-value>)",
      700: "rgb(var(--color-success-700) / <alpha-value>)",
      800: "rgb(var(--color-success-800) / <alpha-value>)",
      900: "rgb(var(--color-success-900) / <alpha-value>)",
      950: "rgb(var(--color-success-950) / <alpha-value>)",
      foreground: "rgb(var(--color-success-foreground) / <alpha-value>)",
    },
    warning: {
      DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
      50: "rgb(var(--color-warning-50) / <alpha-value>)",
      100: "rgb(var(--color-warning-100) / <alpha-value>)",
      200: "rgb(var(--color-warning-200) / <alpha-value>)",
      300: "rgb(var(--color-warning-300) / <alpha-value>)",
      400: "rgb(var(--color-warning-400) / <alpha-value>)",
      500: "rgb(var(--color-warning-500) / <alpha-value>)",
      600: "rgb(var(--color-warning-600) / <alpha-value>)",
      700: "rgb(var(--color-warning-700) / <alpha-value>)",
      800: "rgb(var(--color-warning-800) / <alpha-value>)",
      900: "rgb(var(--color-warning-900) / <alpha-value>)",
      950: "rgb(var(--color-warning-950) / <alpha-value>)",
      foreground: "rgb(var(--color-warning-foreground) / <alpha-value>)",
    },
    error: {
      DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
      50: "rgb(var(--color-error-50) / <alpha-value>)",
      100: "rgb(var(--color-error-100) / <alpha-value>)",
      200: "rgb(var(--color-error-200) / <alpha-value>)",
      300: "rgb(var(--color-error-300) / <alpha-value>)",
      400: "rgb(var(--color-error-400) / <alpha-value>)",
      500: "rgb(var(--color-error-500) / <alpha-value>)",
      600: "rgb(var(--color-error-600) / <alpha-value>)",
      700: "rgb(var(--color-error-700) / <alpha-value>)",
      800: "rgb(var(--color-error-800) / <alpha-value>)",
      900: "rgb(var(--color-error-900) / <alpha-value>)",
      950: "rgb(var(--color-error-950) / <alpha-value>)",
      foreground: "rgb(var(--color-error-foreground) / <alpha-value>)",
    },
    black: {
      DEFAULT: "rgb(var(--color-black) / <alpha-value>)",
    },
    white: {
      DEFAULT: "rgb(var(--color-white) / <alpha-value>)",
    },
    page: {
      DEFAULT: "rgb(var(--color-page) / <alpha-value>)",
      foreground: "rgb(var(--color-page-foreground) / <alpha-value>)",
    },
    surface: {
      DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
    },
    raised: {
      DEFAULT: "rgb(var(--color-raised) / <alpha-value>)",
    },
    input: {
      DEFAULT: "rgb(var(--color-input) / <alpha-value>)",
    },
    tab: {
      DEFAULT: "rgb(var(--color-tab) / <alpha-value>)",
      active: "rgb(var(--color-tab-active) / <alpha-value>)",
      content: "rgb(var(--color-tab-content) / <alpha-value>)",
      foreground: "rgb(var(--color-tab-foreground) / <alpha-value>)",
    },
    "btn-primary": {
      DEFAULT: "rgb(var(--color-btn-primary) / <alpha-value>)",
      foreground: "rgb(var(--color-btn-primary-foreground) / <alpha-value>)",
      hover: "rgb(var(--color-btn-primary-hover) / <alpha-value>)",
    },
    "btn-primary-ghost": {
      DEFAULT: "rgb(var(--color-btn-primary-ghost) / <alpha-value>)",
      hover: "rgb(var(--color-btn-primary-ghost-hover) / <alpha-value>)",
      foreground: "rgb(var(--color-btn-primary-ghost-foreground) / <alpha-value>)",
    },
    "btn-secondary": {
      DEFAULT: "rgb(var(--color-btn-secondary) / <alpha-value>)",
      foreground: "rgb(var(--color-btn-secondary-foreground) / <alpha-value>)",
      hover: "rgb(var(--color-btn-secondary-hover) / <alpha-value>)",
    },
    "btn-secondary-ghost": {
      DEFAULT: "rgb(var(--color-btn-secondary-ghost) / <alpha-value>)",
      foreground: "rgb(var(--color-btn-secondary-ghost-foreground) / <alpha-value>)",
      hover: "rgb(var(--color-btn-secondary-ghost-hover) / <alpha-value>)",
    },
    "chip-primary": {
      DEFAULT: "rgb(var(--color-chip-primary) / <alpha-value>)",
      foreground: "rgb(var(--color-chip-primary-foreground) / <alpha-value>)",
      hover: "rgb(var(--color-chip-primary-hover) / <alpha-value>)",
    },
  },
  borderColor: {
    surface: "rgb(var(--border-color-surface))",
    raised: "rgb(var(--border-color-raised))",
    "input-border": "rgb(var(--border-input-border))",
  },
  borderRadius: {
    btn: "var(--rounded-btn)",
    color: "var(--rounded-color)",
    input: "var(--rounded-input)",
    tab: "var(--rounded-tab)",
    "tab-content": "var(--rounded-tab-content)",
    area: "var(--rounded-area)",
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
    input: "var(--height-input)",
    tab: "var(--height-tab)",
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
    tab: "var(--padding-tab)",
  },
  spacing: {
    btn: "var(--spacing-btn)",
    chip: "var(--spacing-chip)",
    input: "var(--spacing-input)",
    tab: "var(--spacing-tab)",
  },
  fontFamily: {
    sans: "var(--font-sans)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },
};

export { SETTINGS_OPTS, INIT_SETTINGS };
