import React, { ChangeEvent, FC } from "react";
import { Input } from "tao-react";
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
  updateButtonOpts: (value: string, type: string) => void;
}

export const ButtonCtrls: FC<ButtonCtrlsProps> = ({
  backgroundColor,
  borderColor,
  borderWidth,
  boxShadow,
  fontSize,
  height,
  padding,
  spacing,
  width,
  updateButtonOpts,
}) => {
  const handleBackgroundColorChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    // Extract the new background color from the input value
    const newColor = e.target.value;

    updateButtonOpts(newColor, "backgroundColor");
  };
  return (
    <div>
      <Input
        value={backgroundColor["btn-primary"].DEFAULT}
        onChange={(e) => handleBackgroundColorChange(e, "backgroundColor")}
        id="btn-ctrl-filler"
      />
    </div>
  );
};
