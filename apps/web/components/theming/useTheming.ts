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
  primaryRgb: rgbValidation,
  secondaryRgb: rgbValidation,
  tertiaryRgb: rgbValidation,
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

  const colorMethods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      primaryRgb: themeState.colorScales.primary.defaultRgb,
      secondaryRgb: themeState.colorScales.secondary.defaultRgb,
      tertiaryRgb: themeState.colorScales.tertiary.defaultRgb,
    },
  });

  const setColorScales = (subType: string, value: string) => {
    const subTypes = subType.split(".");

    switch (subTypes[1]) {
      case "defaultRgb":
        const payload = {
          [subTypes[0]]: {
            ...themeState.colorScales[subTypes[0]],
            defaultRgb: value,
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
        setColorScales(subType, value as string);
        break;
      case "borderColor":
        setBorderColor(subType, value as string);
        break;
    }
  };

  return {
    themeState,
    updateTheme,
    colorMethods,
  };
};
