import chroma from "chroma-js";

interface ColorLibrary {
  darkenHex: (hex: string, by: number) => string;
  rgbToHex: (r: number, g: number, b: number) => string;
}

const colorLib: ColorLibrary = {
  darkenHex: (hex: string, by: number) => chroma(hex).darken(by).hex(),
  rgbToHex: (r: number, g: number, b: number) => chroma(r, g, b).hex(),
};

// Use the colorLib in your code
const darkenHex = (hex: string, by: number) => {
  try {
    return { data: colorLib.darkenHex(hex, by) };
  } catch (e) {
    const error = e as Error;
    return {
      errorMsg: error.message,
    };
  }
};

const rgbToHex = (r: number, g: number, b: number) => {
  try {
    return { data: colorLib.rgbToHex(r, g, b) };
  } catch (e) {
    const error = e as Error;
    return {
      errorMsg: error.message,
    };
  }
};

export const useColors = () => {
  return {
    darkenHex: darkenHex,
    rgbToHex: rgbToHex,
  };
};
