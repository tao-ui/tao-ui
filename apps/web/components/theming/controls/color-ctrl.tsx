import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage, Input, Label } from "tao-react";
import { z } from "zod";
import { isValidRGB } from "~/helpers/validation";

type ColorMethod = {
  [key: string]: {
    [key: string]: string;
  };
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  colorMode: string;
  color: any;
  colorMethods: ColorMethod;
  updateTheme: any;
}

export const ColorCtrl: FC<Props> = ({ children, colorMode, color, colorMethods, updateTheme }) => {
  const formSchema = z.object({
    [`${color.key}-${colorMode}`]: z.string().refine(isValidRGB, {
      message: "RGB must be in the format 255, 255, 255 or similar and each number between 0 and 255.",
    }),
  });

  type FormData = z.infer<typeof formSchema>;

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: colorMethods,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    // updateTheme(data, "color-scales", "patch-default-color");
  };

  const handleDefaultOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const payload: Record<string, string> = {
      type: color.key,
    };
    if (e.target.name === "defaultPosition") {
      payload.defaultPosition = newValue;
    }
    if (e.target.name === "rgb") {
      payload.rgb = newValue;
    }

    updateTheme(payload, "color-scales", "patch-default-color");
  };

  return (
    <div key={`${color.key}`}>
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name={`${color.key}-${colorMode}`}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="primary-rgb">
                  Default: {color.key}-{colorMode}
                </Label>
                <FormControl>
                  <Input id={`${color.key}-${colorMode}`} placeholder={`Enter ${colorMode} value`} {...field} />
                </FormControl>
                {/* <FormMessage>{String(errors[`${colorMode}`]?.message) || ""}</FormMessage> */}
                <FormMessage>{errors[`${color.key}-${colorMode}`]?.message}</FormMessage>
              </FormItem>
            )}
          />
          <button type="submit">Submit and stuff</button>
        </form>
      </Form>

      {children}
      {/* {color &&
        Object.entries(color).map(([colorKey, colorValue]) => (
          <ColorCtrls.ColorCtl colorKey={colorKey} colorValue={colorValue} methods={colorStopsMethods[colorKey]} />
          <Form key={colorKey} {...colorRgbMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5>
                {colorValue.title} {colorKey}
              </h5>

              <div className="grid w-full grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name={colorMode}
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor={colorKey}>Default: {colorMode}</Label>
                      <FormControl>
                        <Input
                          id={colorKey}
                          placeholder={`Enter ${colorMode} value`}
                          {...field}
                          onBlur={handleDefaultOnBlur}
                        />
                      </FormControl>
                      <FormMessage>{errors[colorKey]?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="position">Default Position</Label>
                      <FormControl>
                        <Input
                          id={`${colorKey}-default`}
                          placeholder="Enter position value"
                          {...field}
                          onBlur={handlePositionOnBlur}
                        />
                      </FormControl>
                      <FormMessage>{errors.position?.message}</FormMessage>
                    </FormItem>
                  )}
                />

                {colorValue.stops.map((stop: any) => (
                  <FormField
                    key={stop.key}
                    control={control}
                    name={stop.key}
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor={`${stop.key}`}>{stop.key}</Label>
                        <FormControl>
                          <Input id={stop.key} placeholder={`Enter ${colorKey} ${stop.key}`} {...field} />
                        </FormControl>
                        <FormMessage>{errors[`${colorKey}.${stop.key}`]?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <Button type="submit">asdf</Button>
            </form>
          </Form>
        ))} */}
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
