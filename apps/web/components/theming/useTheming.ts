import { zodResolver } from "@hookform/resolvers/zod";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { THEME_SETTINGS, type ThemeSettings } from "~/data/settings";

// Local Helpers, move a level or two up if needed.

const wrapVar = (value: string, type = "") => {
  if (type === "rgb") return `rgb(var(--${value}))`;
  return `var(--${value})`;
};

// Types
type Action =
  | { type: "SET_COLOR_VARS"; payload: ThemeSettings["colorVars"] }
  | { type: "SET_COLOR_SCALES"; payload: ThemeSettings["colorScales"] }
  | { type: "SET_BORDER_COLOR"; payload: ThemeSettings["borderColor"] }
  | { type: "SET_BORDER_WIDTH"; payload: ThemeSettings["borderWidth"] }
  | { type: "SET_BOX_SHADOW"; payload: ThemeSettings["boxShadow"] }
  | { type: "SET_FONT_SIZE"; payload: ThemeSettings["fontSize"] }
  | { type: "SET_HEIGHT"; payload: ThemeSettings["height"] }
  | { type: "SET_PADDING"; payload: ThemeSettings["padding"] }
  | { type: "SET_SPACING"; payload: ThemeSettings["spacing"] }
  | { type: "SET_WIDTH"; payload: ThemeSettings["width"] };

const rgbRegex = /^(\d{1,3})(?:, ?|,| )(\d{1,3})(?:, ?|,| )(\d{1,3})$/;

const isValidRGB = (value: string) => {
  const trimmedValue = value.trim();
  const match = trimmedValue.match(rgbRegex);
  if (!match) return false;
  return match.slice(1, 4).every((num) => Number(num) >= 0 && Number(num) <= 255);
};

const rgbValidation = z.string().refine(isValidRGB, {
  message: "RGB must be in the format 255, 255, 255 or similar and each number between 0 and 255.",
});

const formSchema = z.object({
  type: z.string(),
  position: z.string(),
  50: rgbValidation,
  100: rgbValidation,
  200: rgbValidation,
  300: rgbValidation,
  400: rgbValidation,
  500: rgbValidation,
  600: rgbValidation,
  700: rgbValidation,
  800: rgbValidation,
  900: rgbValidation,
  950: rgbValidation,
});
export type FormData = z.infer<typeof formSchema>;

const themeReducer = (state: ThemeSettings, action: Action) => {
  switch (action.type) {
    case "SET_COLOR_VARS":
      return {
        ...state,
        colorVars: action.payload,
      };
    case "SET_COLOR_SCALES":
      return {
        ...state,
        colorScales: {
          ...state.colorScales,
          ...action.payload,
        },
      };
    case "SET_BORDER_COLOR":
      return {
        ...state,
        borderColors: action.payload,
      };
    case "SET_BORDER_WIDTH":
      return {
        ...state,
        borderWidth: action.payload,
      };
    case "SET_BOX_SHADOW":
      return {
        ...state,
        boxShadow: action.payload,
      };
    case "SET_FONT_SIZE":
      return {
        ...state,
        fontSize: action.payload,
      };
    case "SET_HEIGHT":
      return {
        ...state,
        height: action.payload,
      };
    case "SET_PADDING":
      return {
        ...state,
        padding: action.payload,
      };
    case "SET_SPACING":
      return {
        ...state,
        spacing: action.payload,
      };
    case "SET_WIDTH":
      return {
        ...state,
        width: action.payload,
      };
    default:
      return state;
  }
};

export const useTheming = () => {
  const [themeState, dispatch] = useReducer(themeReducer, THEME_SETTINGS);

  const colorMode = themeState.colorMode;

  const colorRgbMethods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      position: "500",
      type: "",
      primary: themeState.colorScales.primary.rgb,
      secondary: themeState.colorScales.secondary.rgb,
      tertiary: themeState.colorScales.tertiary.rgb,
    },
  });

  const colorScales = themeState.colorScales;

  const setColorScales = (subType: string, value: any) => {
    // const subTypes = subType.split(".");

    switch (subType) {
      case "default":
        const stops = [
          { key: 50, c: `bg-${value.type}-50`, [`${value.type}`]: value["50"] },
          { key: 100, c: `bg-${value.type}-100`, [`${value.type}`]: value["100"] },
          { key: 200, c: `bg-${value.type}-200`, [`${value.type}`]: value["200"] },
          { key: 300, c: `bg-${value.type}-300`, [`${value.type}`]: value["300"] },
          { key: 400, c: `bg-${value.type}-400`, [`${value.type}`]: value["400"] },
          { key: 500, c: `bg-${value.type}-500`, [`${value.type}`]: value["500"] },
          { key: 600, c: `bg-${value.type}-600`, [`${value.type}`]: value["600"] },
          { key: 700, c: `bg-${value.type}-700`, [`${value.type}`]: value["700"] },
          { key: 800, c: `bg-${value.type}-800`, [`${value.type}`]: value["800"] },
          { key: 900, c: `bg-${value.type}-900`, [`${value.type}`]: value["900"] },
          { key: 950, c: `bg-${value.type}-950`, [`${value.type}`]: value["950"] },
        ];

        const payload = {
          [`${value.type}`]: {
            key: value.type,
            title: value.type,
            rgb: value.type === "rgb" ? value[value[value.position]] : themeState.colorScales[value.type].rgb,
            hex: value.type === "hex" ? value[value[value.position]] : themeState.colorScales[value.type].hex,
            c: `bg-${value.type}`,
            foreground: value.foreground,
            stops: stops,
          },
        };
        dispatch({ type: "SET_COLOR_SCALES", payload });
        break;
    }
  };

  const setBorderColor = (subType: string, value: string) => {
    const payload = { ...themeState.borderColor, [subType]: wrapVar(value) };
    dispatch({ type: "SET_BORDER_COLOR", payload });
  };

  const updateTheme = <T>(value: T, type: string, subType: string) => {
    switch (type) {
      case "colorScales":
        setColorScales(subType, value);
        break;
      case "borderColor":
        setBorderColor(subType, value as string);
        break;
    }
  };

  return {
    themeState,
    updateTheme,
    colorRgbMethods,
    colorScales,
    colorMode,
  };
};
