import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import * as React from "react";

const ButtonBase = "inline-flex items-center justify-center whitespace-nowrap ";

const ButtonVariants = cva(ButtonBase, {
  variants: {
    color: {
      default: "",
      secondary: "",
      tertiary: "",
    },
    variant: {
      default: "",
      ghost: "",
      custom: "",
    },
    size: {
      default: "p-btn h-btn text-btn",
      sm: "p-btn-sm h-btn-sm text-btn-sm",
      lg: "p-btn-lg h-btn-lg text-btn-lg",
      icon: "w-btn-icon h-btn-icon",
    },
  },
  compoundVariants: [
    {
      color: ["default"],
      variant: ["default"],
      class: "bg-btn-primary hover:bg-btn-primary/80 text-btn-primary-foreground border-transparent",
    },
    {
      color: ["default"],
      variant: ["ghost"],
      class: "bg-btn-primary-ghost/20 hover:bg-btn-primary-ghost/10 text-btn-primary-ghost border-btn-primary-ghost",
    },

    {
      color: ["secondary"],
      variant: ["default"],
      class: "bg-btn-secondary hover:bg-btn-secondary/80 text-btn-secondary-foreground border-transparent",
    },
    {
      color: ["secondary"],
      variant: ["ghost"],
      class:
        "bg-btn-secondary-ghost/20 hover:bg-btn-secondary-ghost/10 text-btn-secondary-ghost border-btn-secondary-ghost",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "default",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  border: string;
  className?: string;
  color?: "default" | "secondary" | "tertiary";
  fontWeight: string;
  rounded: string;
  shadow: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "ghost" | "custom";
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      border = "border-btn",
      className,
      color,
      fontWeight = "font-weight-btn",
      rounded = "rounded-btn",
      shadow = "shadow-btn",
      size,
      variant,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={clsx(ButtonVariants({ variant, size, color, className }), border, fontWeight, rounded, shadow)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "button";

export { Button, ButtonBase, ButtonVariants };
