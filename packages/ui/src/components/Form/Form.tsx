import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";
import { Label } from "../Label/";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

type FormItemProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: string;
  direction?: "default" | "horizontal";
};

const FormItemBase = "flex";

const FormItemVariants = cva(FormItemBase, {
  variants: {
    direction: {
      default: "flex-col",
      horizontal: "flex-row",
    },
  },
  defaultVariants: {
    direction: "default",
  },
});

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, direction, gap = "gap-form-item ", ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={clsx(FormItemVariants({ direction, className }), gap)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

type FormLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  textColor?: string;
};

const FormLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, FormLabelProps>(
  ({ className, textColor = "text-destructive", ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return <Label ref={ref} className={clsx(error && textColor, className)} htmlFor={formItemId} {...props} />;
  },
);
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & {
  textSize?: string;
  textColor?: string;
};

const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, textSize = "text-aside", textColor = "text-muted-high", ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={clsx(textColor, textSize, className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement> & {
  textSize?: string;
};

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, textSize = "text-aside", children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={clsx(textSize, "text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
