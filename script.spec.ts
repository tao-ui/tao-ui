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

      expect(css).toContain("--color-primary:");
      expect(css).toContain("--color-accent:");
      expect(css).toContain("--color-neutral-cool:");
    });
  });
});

const COLOR_STOPS = COLOR_SCALES.primary.stops;
const STOPS_PRIMARY_KEY = COLOR_SCALES.primary.key;
const STOPS_PRIMARY_DEFAULT_RGB = COLOR_SCALES.primary.defaultRgb;

describe("Root Script / stopsToCSS", () => {
  it("returned string should contain '--color-50:'", () => {
    expect(stopsToCSS(COLOR_STOPS, STOPS_PRIMARY_KEY, STOPS_PRIMARY_DEFAULT_RGB)).toContain("--color-primary-50:");
  });
});

describe("Root Script / colorVarsToCSS", () => {
  it("returned string should contain '--color-black:'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-black:");
  });

  it("returned string should contain '--color-white:'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-white:");
  });

  it("returned string should contain '--color-surface:'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-surface:");
  });

  it("returned string should contain '--color-raised-foreground:'", () => {
    expect(colorVarsToCSS(INIT_SETTINGS.colorVars)).toContain("--color-raised-foreground:");
  });
});
