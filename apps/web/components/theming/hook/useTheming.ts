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

  Object.entries(themeState.colorScales).forEach(([key, value]) => {
    colorMethods[key] = {
      [`${themeState.colorScales[key].key}-rgb`]: themeState.colorScales[key].rgb,
      [`${themeState.colorScales[key].key}-hex`]: themeState.colorScales[key].hex,
      defaultPosition: themeState.colorScales[key].defaultPosition,
    };

    value.stops.forEach((stop: any) => {
      if (!colorMethods[key]) {
        colorMethods[key] = {};
      }
      colorMethods[key][`${themeState.colorScales[key].key}-${stop.key}-rgb`] = stop.rgb;
      colorMethods[key][`${themeState.colorScales[key].key}-${stop.key}-hex`] = stop.hex;
    });
  });

  const updateColorScales = (value: any, subType: string) => {
    let payload;
    let updatedStops;

    const updateStop = () => {
      return themeState.colorScales[value.colorNameKey].stops.map((stop) => {
        if (stop.key === value.stop) {
          return {
            ...stop,
            [value.colorMode]: value[value.colorMode],
          };
        }
        return stop;
      });
    };

    switch (subType) {
      case "put-stops":
        updatedStops = updateStop();

        payload = {
          key: value.colorNameKey,
          stops: updatedStops,
        };

        dispatch({ type: "PUT_COLOR_STOPS", payload: payload });
        break;

      case "patch-default-color":
        updatedStops = updateStop();

        payload = {
          ...themeState.colorScales[value.colorNameKey],
          stops: updatedStops,
        };

        if (value.colorMode === "rgb") {
          payload.rgb = value.rgb;
        }

        if (value.colorMode === "hex") {
          payload.hex = value.hex;
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

  const updateTheme = <T>(value: T, type: UpdateThemeTypes, subType: UpdateThemeSubtypes) => {
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
    colorMethods,
  };
};
