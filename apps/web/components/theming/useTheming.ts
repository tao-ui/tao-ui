import { useReducer } from "react";
import { THEME_SETTINGS, type ThemeSettings } from "~/data/settings";

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

  const buttonProps = {
    backgroundColor: themeState.colorVars,
    borderColor: themeState.borderColor,
    borderWidth: themeState.borderWidth,
    boxShadow: themeState.boxShadow,
    fontSize: themeState.fontSize,
    height: themeState.height,
    padding: themeState.padding,
    spacing: themeState.spacing,
    width: themeState.width,
  };

  const inputProps = {
    backgroundColor: themeState.colorVars,
    borderColor: themeState.borderColor,
    borderWidth: themeState.borderWidth,
    boxShadow: themeState.boxShadow,
    fontSize: themeState.fontSize,
    height: themeState.height,
    padding: themeState.padding,
    spacing: themeState.spacing,
    width: themeState.width,
  };

  // TODO: maybe on having these broken into their own functions vs inline.
  const setColorVars = (payload: any) => dispatch({ type: "SET_COLOR_VARS", payload });
  const setColorScales = (payload: any) => dispatch({ type: "SET_COLOR_SCALES", payload });
  const setBorderColor = (payload: any) => dispatch({ type: "SET_BORDER_COLOR", payload });
  const setBorderWidth = (payload: any) => dispatch({ type: "SET_BORDER_WIDTH", payload });
  const setBoxShadow = (payload: any) => dispatch({ type: "SET_BOX_SHADOW", payload });
  const setFontSize = (payload: any) => dispatch({ type: "SET_FONT_SIZE", payload });
  const setHeight = (payload: any) => dispatch({ type: "SET_HEIGHT", payload });
  const setPadding = (payload: any) => dispatch({ type: "SET_PADDING", payload });
  const setSpacing = (payload: any) => dispatch({ type: "SET_SPACING", payload });
  const setWidth = (payload: any) => dispatch({ type: "SET_WIDTH", payload });

  const updateButtonOpts = (value: string, type: string) => {
    if (type === "backgroundColor") {
      setColorVars({ ...themeState, "btn-primary": { DEFAULT: value } });
    }
  };
  const updateInputOpts = (value: string, type: string) => {};

  return {
    themeState,
    buttonProps,
    inputProps,
    updateButtonOpts,
    updateInputOpts,
  };
};
