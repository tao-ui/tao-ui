import React, { FC, HTMLAttributes } from "react";
import { CtrlHead } from "./ctrl-head";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?;
}

export const ColorCtrls: FC<Props> = ({ children, className }) => {
  return (
    <div>
      <CtrlHead title="Colors" />
      <>{children}</>
    </div>
  );
};
