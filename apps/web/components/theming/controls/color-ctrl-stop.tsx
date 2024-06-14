import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  colorMode: string;
  colorValue: any;
  updateTheme: any;
}

export const ColorCtrlStop: FC<Props> = ({ children, colorMode, colorValue, updateTheme }) => {
  return <div>{colorValue}</div>;
};
