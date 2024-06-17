import clsx from "clsx";
import React, { FC } from "react";
import { type ThemeSettings } from "~/data/settings";

export const ColorStop: FC<any> = ({ colorClass, colorKey }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center">
        <span className={clsx(colorClass, "inline-block h-8 w-full rounded-md sm:h-10 sm:min-w-10")}></span>
        <span className="!mx-auto text-center ">{colorKey}</span>
      </div>
    </>
  );
};
