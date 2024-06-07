import React, { ChangeEvent, FC } from "react";
import { Input } from "tao-react";
import { type ThemeSettings } from "~/data/settings";

interface ButtonCtrlsProps {
  colorScales: ThemeSettings["colorScales"];
  colorVars: ThemeSettings["colorVars"];
  updateTheme: (value: string, type: string, subType: string) => void;
}

export const ColorCtrls: FC<ButtonCtrlsProps> = ({ colorScales, colorVars, updateTheme }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: string, subType: string) => {
    // Extract the new background color from the input value
    const newColor = e.target.value;

    updateTheme(newColor, type, subType);
  };
  return (
    // TODO: extract into UI components
    <>
      {Object.values(colorScales).map((color) => (
        <div key={color.key} className="flex flex-col">
          <label htmlFor="color-input-value">{color.title} Color</label>
          <Input
            value={color.defaultRgb}
            onChange={(e) => handleChange(e, "colorScales", `${color.key}.defaultRgb`)}
            id="color-input-value"
          />
        </div>
      ))}
    </>
  );
};
