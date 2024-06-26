// @ts-ignore
import { INIT_SETTINGS } from "../../../theme-settings";

interface ColorScalesStop {
  key: string;
  c: string;
  rgb: string;
}

export interface ColorScale {
  key: string;
  title: string;
  rgb: string;
  hex: string;
  c: string;
  defaultPosition: string;
  foreground: string;
  stops: ColorScalesStop[];
}

export interface ColorScales {
  [key: string]: ColorScale;
}

export interface ColorVar {
  DEFAULT: string;
  foreground?: string;
  hint?: string;
  hover?: string;
}

export interface ThemeSettings {
  colorMode: "rgb" | "hex";
  colorScales: ColorScales;
  colorVars: Record<string, ColorVar>;
  backgroundColor: Record<string, string>;
  borderColor: Record<string, String>;
  borderRadius: Record<string, string>;
  borderWidth: Record<string, string>;
  boxShadow: Record<string, string>;
  fontFamily: Record<string, any>;
  fontSize: Record<string, string>;
  height: Record<string, string>;
  padding: Record<string, string>;
  spacing: Record<string, string>;
  width: Record<string, string>;
}

export const STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

export const THEME_SETTINGS = INIT_SETTINGS as ThemeSettings;

export const RAW_HEX_CODES = {
  "neutral-cool-gray": "#7B797F",
};
