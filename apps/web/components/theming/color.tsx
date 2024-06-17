import clsx from "clsx";
import React, { FC } from "react";
import { type ThemeSettings } from "~/data/settings";

export const Color: FC<any> = ({ colorClass, title, colorValue, children }) => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <span className={clsx(colorClass, "inline-block h-10 w-10 rounded-el")}></span>
        <span className="font-bold uppercase">{title}</span>
        <span>{colorValue}</span>
      </div>
      {children && <div className="flex gap-1">{children}</div>}
    </>
  );
};
