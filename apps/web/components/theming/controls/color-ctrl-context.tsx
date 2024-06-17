import React, { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

interface ColorCtrlContextProps {
  errors: any;
  control: any;
}

const ColorCtrlContext = createContext<ColorCtrlContextProps | undefined>(undefined);

export const useColorCtrlContext = () => {
  const context = useContext(ColorCtrlContext);
  if (!context) {
    throw new Error("useColorCtrlContext must be used within a ColorCtrlProvider");
  }
  return context;
};

interface ColorCtrlProviderProps {
  children: ReactNode;
  errors: any;
  control: any;
}

export const ColorCtrlProvider: React.FC<ColorCtrlProviderProps> = ({ children, errors, control }) => {
  return <ColorCtrlContext.Provider value={{ errors, control }}>{children}</ColorCtrlContext.Provider>;
};
