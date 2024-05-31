// @ts-ignore
import { INIT_SETTINGS } from "../../../theme-settings";

interface ColorScalesStop {
  key: string;
  c: string;
  rgb: string;
}

interface ColorScale {
  key: string;
  title: string;
  defaultRgb: string;
  foreground: string;
  stops: ColorScalesStop[];
}

interface ColorScales {
  [key: string]: ColorScale;
}

interface ColorVar {
  DEFAULT: string;
  foreground?: string;
  hint?: string;
  hover?: string;
}

export interface ThemeSettings {
  colorScales: ColorScales;
  colorVars: Record<string, ColorVar>;
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

const THEME_SETTINGS = INIT_SETTINGS as ThemeSettings;

export { THEME_SETTINGS };
