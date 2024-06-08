// import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";
import * as React from "react";

const InputWrapperBase = "inline-flex items-center whitespace-nowrap";

const InputBase = "w-full bg-transparent appearance-none outline-none";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  bg: string;
  border: string;
  borderColor: string;
  className?: string;
  color: string;
  describedBy?: string;
  disabled?: boolean;
  error?: string;
  ErrorIcon?: React.ReactNode;
  errorImgSrc?: string;
  iconBase: string;
  id: string;
  inputForeground: string;
  inputSize: string;
  LeadIcon?: React.ReactNode;
  placeholder?: string;
  placeholderInputHint: string;
  rounded: string;
  shadow: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bg = "bg-input",
      border = "border-input",
      borderColor = "border-input-color",
      children,
      className,
      describedBy,
      disabled,
      error,
      ErrorIcon,
      errorImgSrc,
      iconBase = "mr-2",
      id,
      inputForeground = "input-foreground",
      inputSize = "p-input h-input",
      LeadIcon,
      placeholder,
      placeholderInputHint = "placeholder-input-hint",
      rounded = "rounded-input",
      shadow = "shadow-input",
      ...props
    },
    ref,
  ) => {
    const describedById = describedBy ? `${id}-describedBy` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const listId = `${id}-list`;
    return (
      <div
        className={clsx(
          InputWrapperBase,
          border,
          borderColor,
          placeholderInputHint,
          bg,
          inputForeground,
          shadow,
          inputSize,
          rounded,
        )}
      >
        {LeadIcon && <div className={iconBase}>{LeadIcon}</div>}
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
        {error && ErrorIcon && <div className={iconBase}>{ErrorIcon}</div>}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, InputBase };
