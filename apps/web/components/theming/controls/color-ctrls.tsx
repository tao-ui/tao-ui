import React, { FC, HTMLAttributes } from "react";
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, Label } from "tao-react";
import { type ThemeSettings } from "~/data/settings";
import { useThemingContext } from "../ThemingProvider";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ColorCtrls: FC<Props> = ({ ...props }) => {
  const { updateTheme, colorMethods } = useThemingContext(); // Use the context hook to get values

  const onSubmit = (data: FormData) => {
    console.log(data);
    console.log("Submitted");
    // updateTheme(newColor, type, subType);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = colorMethods;

  return (
    // TODO: extract into UI components
    <div className="grid w-full grid-cols-2 gap-4">
      <Form {...colorMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {colorMethods.formState.defaultValues &&
            Object.entries(colorMethods.formState.defaultValues).map(([key, color]) => (
              <FormField
                key={key}
                control={control}
                name={key}
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor={key}>{key}</Label>
                    <FormControl>
                      <Input id={key} placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage>{errors[key]?.message}</FormMessage>
                  </FormItem>
                )}
              />
            ))}

          <button type="submit">Show Results</button>
        </form>
      </Form>
    </div>
  );
};

// {
//   Object.values(colorScales).map((color) => (
//     <div key={color.key} className="flex flex-col">
//       <label htmlFor="color-input-value">{color.title} Color</label>
//       <Input
//         value={color.defaultRgb}
//         onChange={(e) => handleChange(e, "colorScales", `${color.key}.defaultRgb`)}
//         id="color-input-value"
//       />
//     </div>
//   ));
// }
