import * as React from "react";
import { HTMLAttributes } from "react";

interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  color?: "default" | "secondary" | undefined;
}

export const Example = React.forwardRef<HTMLDivElement, ExampleProps>(() => {
  return <div>Example</div>;
});
