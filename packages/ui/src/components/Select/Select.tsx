import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { SelectHTMLAttributes } from "react";
import * as React from "react";

const SelectWrapperBase = "inline-flex items-center whitespace-nowrap shadow-el rounded-input border-input";

const SelectBase = "w-full bg-transparent appearance-none";

const IconBase = "w-input-icon mr-input";

const SelectVariants = cva(SelectWrapperBase, {
  variants: {
    color: {
      default: "bg-surface border-surface placeholder-surface-hint",
      raised: "bg-raised border-raised placeholder-raised-hint",
    },
    size: {
      default: "p-input",
      sm: "p-input-sm",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  color?: "default" | "raised" | undefined;
  disabled?: boolean;
  error?: string;
  errorImgSrc?: string;
  describedBy?: string;
  id: string;
  LeadIcon?: React.ReactNode;
  options: (number | string)[];
  ErrorIcon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
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
      options,
      ...props
    },
    ref,
  ) => {
    const describedById = describedBy ? `${id}-describedBy` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    return (
      <div className={clsx(SelectVariants({ color: color, className }))}>
        {LeadIcon && <div className={IconBase}>{LeadIcon}</div>}

        <select
          className={SelectBase}
          id={id}
          name={id}
          disabled={disabled}
          aria-describedby={`${describedById} ${errorId}`}
          {...props}
          ref={ref}
        >
          {/* {options.map((value: string | number) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))} */}
          {children}
        </select>

        {error && ErrorIcon && <div className={IconBase}>{ErrorIcon}</div>}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select, SelectBase, SelectVariants };
