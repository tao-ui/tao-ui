// @ts-ignore
import { CONFIG_OPTS } from "../../../theme-presets";

// TODO: Make issue - more specific types.
interface ColorSetting {
  [key: string]: string;
}

export interface ColorsSetting {
  [key: string]: ColorSetting;
}

export interface ThemeSettings {
  colors: ColorsSetting;
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
  height: Record<string, string>;
  padding: Record<string, string>;
}

const THEME_SETTINGS = CONFIG_OPTS as ThemeSettings;

export { THEME_SETTINGS };
