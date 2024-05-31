import React, { FC } from "react";
import { Input } from "tao-react";
import { type ThemeSettings } from "~/data/settings";

interface InputCtrlsProps {
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

export const InputCtrls: FC<InputCtrlsProps> = ({
  backgroundColor,
  borderColor,
  borderWidth,
  boxShadow,
  height,
  padding,
  width,
}) => {
  return (
    <div>
      <Input id="input-ctrl-filler" />
    </div>
  );
};
