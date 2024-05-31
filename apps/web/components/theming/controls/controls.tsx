import React, { ReactNode } from "react";

interface ControlsProps {
  children: ReactNode;
}

export const Controls: React.FC<ControlsProps> = ({ children }) => {
  return <aside>{children}</aside>;
};
