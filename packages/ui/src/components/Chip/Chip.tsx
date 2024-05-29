import { Slottable } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import * as React from "react";
import { HTMLAttributes } from "react";

const ChipBase =
  "inline-flex items-center whitespace-nowrap h-chip px-chip-px py-chip-py shadow-btn-sm !rounded-btn text-btn-sm border-w-2";

const IconBase = "w-chip-icon mr-chip-spacing";

const ChipVariants = cva(ChipBase, {
  variants: {
    color: {
      default: "bg-chip-primary  !text-chip-primary-foreground border-red-500",
      secondary: "!bg-chip-primary-primary border-red-500",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  color?: "default" | "secondary" | undefined;
  LeadIcon?: React.ReactNode;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(({ color, className, LeadIcon, children, ...props }, ref) => {
  return (
    <div className={clsx(ChipVariants({ color, className }))} ref={ref} {...props}>
      {LeadIcon && <div className={IconBase}>{LeadIcon}</div>}
      <Slottable>{children}</Slottable>
    </div>
  );
});

Chip.displayName = "Chip";

export { Chip };
