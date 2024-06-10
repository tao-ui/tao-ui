import React, { createContext, ReactNode, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData, useTheming } from "./useTheming";

export interface ThemingContextType {
  updateTheme: <T>(value: T, type: string, subType: string) => void;
  colorMethods: UseFormReturn<FormData>;
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
  const { colorMethods, updateTheme } = useTheming();
  const context = {
    colorMethods: colorMethods,
    updateTheme: updateTheme,
  };

  return <ThemingContext.Provider value={context}>{children}</ThemingContext.Provider>;
};
