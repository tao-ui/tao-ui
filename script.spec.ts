import { describe, expect, it } from "vitest";
import { colorScalesToCSS, colorVarsToCSS, generalVarsToCSS, stopsToCSS } from "./script";
import { INIT_SETTINGS } from "./theme-settings";

const COLOR_SCALES = INIT_SETTINGS.colorScales;

describe("Root Script / colorScalesToCSS", () => {
  it("The functions expected argument should be an object with key that contain key and title, and a 'stops' array of objects", () => {
    expect(typeof INIT_SETTINGS.colorScales).toBe("object");

    for (const key in INIT_SETTINGS.colorScales) {
      const colorScale = INIT_SETTINGS.colorScales[key];

      expect(colorScale).toHaveProperty("key");
      expect(colorScale).toHaveProperty("title");
      expect(colorScale).toHaveProperty("stops");
      expect(Array.isArray(colorScale.stops)).toBe(true);
    }

    it("should generate CSS variables to contain stops DEFAULT values", () => {
      const css = colorScalesToCSS(INIT_SETTINGS.colorScales);

      expect(css).toContain("--color-primary: rgb(");
      expect(css).toContain("--color-accent: rgb(");
      expect(css).toContain("--color-neutral-cool: rgb(");
    });
  });
});

const COLOR_STOPS = COLOR_SCALES.primary.stops;
const STOPS_PRIMARY_KEY = COLOR_SCALES.primary.key;
const STOPS_PRIMARY_DEFAULT_RGB = COLOR_SCALES.primary.defaultRgb;

describe("Root Script / stopsToCSS", () => {
  it("returned string should contain '--color-50: rgb(242, 245, 252)'", () => {
    expect(stopsToCSS(COLOR_STOPS, STOPS_PRIMARY_KEY, STOPS_PRIMARY_DEFAULT_RGB)).toContain(
      "--color-primary-50: rgb(242, 245, 252);",
    );
  });

  it("returned string should contain '--color-primary: rgb(57, 68, 156)'", () => {
    expect(stopsToCSS(COLOR_STOPS, STOPS_PRIMARY_KEY, STOPS_PRIMARY_DEFAULT_RGB)).toContain(
      "--color-primary: rgb(57, 68, 156);",
    );
  });
});

describe("Root Script / colorVarsToCSS", () => {
  it("returned string should contain '--color-black: rgb(15, 15, 16)'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-black: rgb(15, 15, 16);");
  });

  it("returned string should contain '--color-white: rgb(255, 255, 255)'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-white: rgb(255, 255, 255);");
  });

  it("returned string should contain '--color-surface: rgb(229, 228, 229, .5)'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-surface: rgb(229, 228, 229, .5);");
  });

  it("returned string should contain '--color-raised-foreground: rgb'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-raised-foreground: rgb");
  });

  it("returned string should contain '--color-raised-hint: rgb'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-raised-hint: rgb");
  });
});

describe("Root Script / generalVarsToCSS", () => {
  it("returned string should contain '--border-btn-primary-ghost: rgb(", () => {
    expect(generalVarsToCSS("border", INIT_SETTINGS.borderColor, true)).toContain("--border-btn-primary-ghost: rgb(");
  });
});
