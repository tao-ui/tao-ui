import React, { FC } from "react";
import { type ThemeSettings } from "~/data/settings";

interface ButtonCtrlsProps {
  backgroundColor: ThemeSettings["colorVars"];
  borderColor: ThemeSettings["borderColor"];
  borderWidth: ThemeSettings["borderWidth"];
  boxShadow: ThemeSettings["boxShadow"];
  fontSize: ThemeSettings["fontSize"];
  height: ThemeSettings["height"];
  padding: ThemeSettings["padding"];
  spacing: ThemeSettings["spacing"];
  width: ThemeSettings["width"];
}
export const Buttons: FC<ButtonCtrlsProps> = ({
  backgroundColor,
  borderColor,
  borderWidth,
  boxShadow,
  fontSize,
  height,
  padding,
  spacing,
  width,
}) => {
  return <div>Buttons component.</div>;
};
