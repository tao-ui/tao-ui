import clsx from "clsx";
import React, { ChangeEvent, FC } from "react";
import { type ThemeSettings } from "~/data/settings";

interface ButtonCtrlsProps {
  colorScales: ThemeSettings["colorScales"];
}

export const ColorScales: FC<ButtonCtrlsProps> = ({ colorScales }) => {
  return (
    <div className="flex-col space-y-2">
      {Object.values(colorScales).map((color) => (
        <div className="flex items-center space-x-4" key={color.key}>
          <span className={clsx(color.defaultTwClass, "inline-block h-10 w-10 rounded-el")}></span>
          <span className="font-bold uppercase">{color.title}</span>
          <span>{color.defaultRgb}</span>
        </div>
      ))}
    </div>
  );
};
