import clsx from "clsx";
import React from "react";

type Props = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export const WrapContainer: React.FC<Props> = ({ as: Component = "div", className = "", children }) => {
  return <Component className={clsx("container mx-auto max-w-screen-xl px-4", className)}>{children}</Component>;
};
