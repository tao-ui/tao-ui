import React, { ReactNode } from "react";

interface ControlsProps {
  children: ReactNode;
  className?: string;
}

export const Controls: React.FC<ControlsProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
