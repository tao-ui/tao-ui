import { type ThemeSettings } from "~/data/settings";

type Action =
  | { type: "SET_COLOR_VARS"; payload: ThemeSettings["colorVars"] }
  | { type: "PUT_COLOR_SCALES"; payload: ThemeSettings["colorScales"] }
  | { type: "PATCH_COLOR_SCALES"; payload: ThemeSettings["colorScales"]["primary"] }
  | { type: "SET_BORDER_COLOR"; payload: ThemeSettings["borderColor"] }
  | { type: "SET_BORDER_WIDTH"; payload: ThemeSettings["borderWidth"] }
  | { type: "SET_BOX_SHADOW"; payload: ThemeSettings["boxShadow"] }
  | { type: "SET_FONT_SIZE"; payload: ThemeSettings["fontSize"] }
  | { type: "SET_HEIGHT"; payload: ThemeSettings["height"] }
  | { type: "SET_PADDING"; payload: ThemeSettings["padding"] }
  | { type: "SET_SPACING"; payload: ThemeSettings["spacing"] }
  | { type: "SET_WIDTH"; payload: ThemeSettings["width"] };

export const themeReducer = (state: ThemeSettings, action: Action) => {
  switch (action.type) {
    case "SET_COLOR_VARS":
      return {
        ...state,
        colorVars: action.payload,
      };
    case "PUT_COLOR_SCALES":
      return {
        ...state,
        colorScales: action.payload,
      };
    case "PATCH_COLOR_SCALES":
      return {
        ...state,
        colorScales: {
          ...state.colorScales,
          [action.payload.key]: action.payload,
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
