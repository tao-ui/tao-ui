"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import * as React from "react";

const labelVariants = cva("text-label peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  textSize?: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants> & LabelProps
>(({ className, textSize = "text-label", ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={clsx(labelVariants(), className, textSize)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
