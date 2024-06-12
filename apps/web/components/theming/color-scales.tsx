import clsx from "clsx";
import React, { FC } from "react";
import { type ThemeSettings } from "~/data/settings";

export const ColorScales: FC<any> = ({ colorScales }) => {
  return (
    <div className="flex-col space-y-2">
      {Object.values(colorScales).map((color) => (
        <div className="flex items-center space-x-4" key={color.key}>
          <span className={clsx(color.c, "inline-block h-10 w-10 rounded-el")}></span>
          <span className="font-bold uppercase">{color.title}</span>
          <span>{color.rgb}</span>
        </div>
      ))}
    </div>
  );
};
