import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, Label } from "tao-react";
import { z } from "zod";
import type { ColorScale } from "~/data/settings";
import { VALIDATE_MSG_RGB } from "~/data/validation";
import { isValidRGB } from "~/helpers/validation";

interface Props extends HTMLAttributes<HTMLDivElement> {
  colorMode: string;
  colorValue: ColorScale;
  colorMethods: any;
  updateTheme: any;
}

export const ColorCtrl: FC<Props> = ({ children, colorMode, colorValue, colorMethods, updateTheme }) => {
  const formSchema = z.object({
    [`${colorValue.key}-${colorMode}`]: z.string().refine(isValidRGB, {
      message: VALIDATE_MSG_RGB,
    }),
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: colorMethods,
  });

  const {
    control,
    formState: { errors },
  } = methods;

  const handleDefaultOnBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = `${colorMode}`;
    const isValid = await methods.trigger(fieldName);

    if (isValid) {
      const payload: Record<string, string> = {
        type: colorValue.key,
        [fieldName]: e.target.value,
      };
      updateTheme(payload, "color-scales", "patch-default-color");
    }
  };

  return (
    <div key={`${colorValue.key}`}>
      <span>{colorValue.title}</span>
      <Form {...methods}>
        <FormField
          control={control}
          name={`${colorValue.key}-${colorMode}`}
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="primary-rgb">
                Default: {colorValue.key}-{colorMode}
              </Label>
              <FormControl>
                <Input
                  id={`${colorValue.key}-${colorMode}`}
                  placeholder={`Enter ${colorMode} value`}
                  {...field}
                  onBlur={handleDefaultOnBlur}
                />
              </FormControl>

              <FormMessage>
                {typeof errors[`${colorValue.key}-${colorMode}`]?.message === "string"
                  ? (errors[`${colorValue.key}-${colorMode}`]?.message as string)
                  : null}
              </FormMessage>
            </FormItem>
          )}
        />
        {children}
        <Button type="submit">submit</Button>
      </Form>
    </div>
  );
};

// interface ColorCtlProps {
//   colorKey: string;
//   colorValue: any;
//   methods: any;
// }

// ColorCtrls.ColorCtl = ({ colorKey, colorValue, methods }: ColorCtlProps) => {
//   // Define your child component here
//   return <div>{colorKey}</div>;
// };
