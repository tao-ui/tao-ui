import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ColorCtrls: FC<Props> = ({ children }) => {
  return (
    <>
      <h4>Colors</h4>
      {children}
    </>
  );
};
