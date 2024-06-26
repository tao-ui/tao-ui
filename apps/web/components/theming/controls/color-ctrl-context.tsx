import React, { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

interface ColorCtrlContextProps {
  methods: any;
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
  methods: any;
}

export const ColorCtrlProvider: React.FC<ColorCtrlProviderProps> = ({ children, methods }) => {
  return <ColorCtrlContext.Provider value={{ methods }}>{children}</ColorCtrlContext.Provider>;
};
