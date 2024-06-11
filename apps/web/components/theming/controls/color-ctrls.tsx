import React, { FC, HTMLAttributes } from "react";
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, Label } from "tao-react";
import { type ThemeSettings } from "~/data/settings";
import { useThemingContext } from "../ThemingProvider";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ColorCtrls: FC<Props> = ({ ...props }) => {
  const { updateTheme, colorScales, colorRgbMethods, colorMode } = useThemingContext();

  const onSubmit = (data: FormData) => {
    updateTheme(data, "colorScales", colorMode);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = colorRgbMethods;

  return (
    <>
      {colorScales &&
        Object.entries(colorScales).map(([colorKey, colorValue]) => (
          <div key={colorKey} className="grid w-full grid-cols-2 gap-4">
            <Form onSubmit={handleSubmit(onSubmit)} {...colorRgbMethods}>
              <FormField
                control={control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="position">Position</Label>
                    <FormControl>
                      <Input id="position" placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage>{errors.position?.message}</FormMessage>
                  </FormItem>
                )}
              />
              {colorValue.stops.map((stop, index) => (
                <FormField
                  key={`${stop.key}`}
                  control={control}
                  name={`${stop.key}`}
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor={`${stop.key}`}>
                        {stop.key} {colorValue.key}
                      </Label>
                      <FormControl>
                        <Input id={`${stop.key}`} placeholder={`Enter ${stop.key}`} {...field} />
                      </FormControl>
                      <FormMessage>{errors[`${stop.key}`]?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit">Show Results</Button>
            </Form>
          </div>
        ))}
    </>
  );
};
