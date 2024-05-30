import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";
import * as React from "react";

const InputWrapperBase =
  "inline-flex items-center whitespace-nowrap shadow-el rounded-input border-input page-foreground text-input";

const InputBase = "w-full bg-transparent appearance-none outline-none";

const IconBase = "w-input-icon mr-input";

const InputVariants = cva(InputWrapperBase, {
  variants: {
    color: {
      default: "bg-surface border-surface placeholder-surface-hint",
      raised: "bg-raised border-raised placeholder-raised-hint",
      custom: "",
    },
    size: {
      default: "p-input",
      sm: "p-input-sm",
      custom: "",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  color?: "default" | "raised" | undefined;
  disabled?: boolean;
  error?: string;
  errorImgSrc?: string;
  describedBy?: string;
  id: string;
  LeadIcon?: React.ReactNode;
  placeholder?: string;
  ErrorIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      color,
      disabled,
      error,
      ErrorIcon,
      errorImgSrc,
      describedBy,
      id,
      LeadIcon,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const describedById = describedBy ? `${id}-describedBy` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const listId = `${id}-list`;
    return (
      <div className={clsx(InputVariants({ color: color, className }))}>
        {LeadIcon && <div className={IconBase}>{LeadIcon}</div>}
        <input
          className={InputBase}
          id={id}
          name={id}
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={`${describedById} ${errorId}`}
          {...props}
          ref={ref}
          list={listId}
        />
        {error && ErrorIcon && <div className={IconBase}>{ErrorIcon}</div>}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, InputBase, InputVariants };
