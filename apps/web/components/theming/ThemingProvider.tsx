import React, { createContext, ReactNode, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData, useTheming } from "./useTheming";

export interface ThemingContextType {
  updateTheme: <T>(value: T, type: string, subType: string) => void;
  colorRgbMethods: UseFormReturn<FormData>;
  colorScales: any;
  colorMode: "rgb" | "hex";
}

// Create a context for theming
const ThemingContext = createContext<ThemingContextType | undefined>(undefined);

export const useThemingContext = () => {
  const context = useContext(ThemingContext);
  if (!context) {
    throw new Error("useThemingContext must be used within a ThemingProvider");
  }
  return context;
};

// Theming provider component
export const ThemingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { colorRgbMethods, colorScales, colorMode, updateTheme } = useTheming();
  const context = {
    colorScales: colorScales,
    colorRgbMethods: colorRgbMethods,
    colorMode: colorMode,
    updateTheme: updateTheme,
  };

  return <ThemingContext.Provider value={context}>{children}</ThemingContext.Provider>;
};
