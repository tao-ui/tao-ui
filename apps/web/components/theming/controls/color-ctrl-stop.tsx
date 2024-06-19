import React, { FC, HTMLAttributes, useContext } from "react";
import { FormControl, FormField, FormItem, FormMessage, Input, Label } from "tao-react";
import { useColorCtrlContext } from "./color-ctrl-context";

interface Props extends HTMLAttributes<HTMLDivElement> {
  colorKey: string;
  colorMode: string;
  colorNameKey: string;
  stopKey: string;
  updateTheme: any;
}

export const ColorCtrlStop: FC<Props> = ({ children, colorKey, colorMode, colorNameKey, stopKey, updateTheme }) => {
  const ctrlContext = useColorCtrlContext();
  const { methods } = ctrlContext;

  const {
    control,
    formState: { errors },
  } = methods;

  const handleDefaultOnBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = colorMode;
    const isValid = await methods.trigger(fieldName);

    if (isValid) {
      const payload: Record<string, string> = {
        colorMode,
        colorNameKey,
        stop: stopKey,
        [fieldName]: e.target.value,
      };

      updateTheme(payload, "color-scales", "put-stops");
    }
  };

  return (
    <div>
      <FormField
        control={control}
        name={`${colorKey}-${colorMode}`}
        render={({ field }) => (
          <FormItem>
            <Label htmlFor={`${colorKey}-${colorMode}`}>{stopKey}</Label>
            <FormControl>
              <Input
                id={`${colorKey}-${colorMode}`}
                placeholder={`Enter ${colorMode} value`}
                {...field}
                onBlur={handleDefaultOnBlur}
              />
            </FormControl>

            <FormMessage>
              {typeof errors[`${colorKey}-${colorMode}`]?.message === "string"
                ? (errors[`${colorKey}-${colorMode}`]?.message as string)
                : null}
            </FormMessage>
          </FormItem>
        )}
      />
      {children}
    </div>
  );
};
