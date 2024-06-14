import { zodResolver } from "@hookform/resolvers/zod";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { STOPS, THEME_SETTINGS, type ThemeSettings } from "~/data/settings";
import { wrapVar } from "./helpers";
import { themeReducer } from "./reducer";

export const useTheming = () => {
  const [themeState, dispatch] = useReducer(themeReducer, THEME_SETTINGS);

  const colorMethods: ColorMethod = {
    primary: {},
    secondary: {},
    tertiary: {},
    example: {},
    accent: {},
    "neutral-cool": {},
  };

  type ColorMethod = {
    [key: string]: {
      [key: string]: string;
    };
  };

  const colorStopMethods = { ...colorMethods };

  Object.entries(themeState.colorScales).forEach(([key, value]) => {
    colorMethods[key] = {
      [`${themeState.colorScales[key].key}-rgb`]: themeState.colorScales[key].rgb,
      [`${themeState.colorScales[key].key}-hex`]: themeState.colorScales[key].hex,
      defaultPosition: themeState.colorScales[key].defaultPosition,
    };
    colorStopMethods[key] = {
      ...STOPS.reduce((acc, stop, index) => {
        acc[`${key}-${stop}`] = themeState.colorScales[key].stops[index].rgb;
        return acc;
      }, {}),
    };
  });

  const methods = {
    colorMethods,
  };

  const updateColorScales = (value: any, subType: string = "put") => {
    let payload;

    switch (subType) {
      case "put":
        const stops = STOPS.map((stop) => ({
          key: stop,
          c: `bg-${value.type}-${stop}`,
          [`${value.type}`]: value[`${stop}`],
        }));
        payload = {
          [`${value.type}`]: {
            key: value.type,
            title: value.type,
            rgb: value.type === "rgb" ? value[value[value.defaultPosition]] : themeState.colorScales[value.type].rgb,
            hex: value.type === "hex" ? value[value[value.defaultPosition]] : themeState.colorScales[value.type].hex,
            c: `bg-${value.type}`,
            foreground: value.foreground,
            stops: stops,
          },
        };
        dispatch({ type: "PUT_COLOR_SCALES", payload });
        break;

      case "patch-default-color":
        const updatedStops = themeState.colorScales[value.type].stops.map((stop) => {
          if (stop.key === value.defaultPosition) {
            return {
              ...stop,
              [value.type]: value[value.type],
            };
          }
          return stop;
        });

        payload = {
          ...themeState.colorScales[value.type],
          stops: updatedStops,
        };

        if (value.rgb) {
          payload.rgb = value.rgb;
        }

        if (value.hex) {
          payload.hex = value.hex;
        }

        if (value.defaultPosition) {
          payload.defaultPosition = value.defaultPosition;
        }

        dispatch({ type: "PATCH_COLOR_SCALES", payload: payload });
        break;
    }
  };

  const setBorderColor = (subType: string, value: string) => {
    const payload = { ...themeState.borderColor, [subType]: wrapVar(value) };
    dispatch({ type: "SET_BORDER_COLOR", payload });
  };

  type UpdateThemeSubtypes = "put" | "patch-default-color";
  type UpdateThemeTypes = "color-scales" | "border-color";

  const updateTheme = <T>(value: T, type: UpdateThemeTypes, subType: UpdateThemeSubtypes = "put") => {
    switch (type) {
      case "color-scales":
        updateColorScales(value, subType);
        break;
      case "border-color":
        setBorderColor(value as string, subType);
        break;
    }
  };

  return {
    themeState,
    updateTheme,
    methods,
  };
};
