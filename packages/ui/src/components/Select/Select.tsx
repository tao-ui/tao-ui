import { clsx } from "clsx";
import { SelectHTMLAttributes } from "react";
import * as React from "react";

const SelectWrapperBase = "inline-flex items-center whitespace-nowrap shadow-el rounded-input border-input";

const SelectBase = "w-full bg-transparent appearance-none";

const IconBase = "w-input-icon mr-input";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  border?: string;
  borderColor?: string;
  bg?: string;
  describedBy?: string;
  disabled?: boolean;
  error?: string;
  ErrorIcon?: React.ReactNode;
  errorImgSrc?: string;
  id: string;
  LeadIcon?: React.ReactNode;
  selectSize?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      className,
      bg = "bg-level-2",
      border = "border-input",
      borderColor = "border-level-3-color",
      disabled,
      error,
      ErrorIcon,
      errorImgSrc,
      describedBy,
      id,
      selectSize = "p-input h-input",
      LeadIcon,
      ...props
    },
    ref,
  ) => {
    const describedById = describedBy ? `${id}-describedBy` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    return (
      <div className={clsx(SelectWrapperBase, bg, borderColor, border, selectSize)}>
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
          {children}
        </select>

        {error && ErrorIcon && <div className={IconBase}>{ErrorIcon}</div>}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select, SelectBase };
