import clsx from "clsx";
import React, { FC } from "react";

export const CtrlHead: FC<any> = ({ title }) => {
  return <h4 className="block w-full pb-[1.125rem] pt-6 text-[32px] font-[600] uppercase">{title}</h4>;
};
