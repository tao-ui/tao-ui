import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ColorCtrls: FC<Props> = ({ children }) => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  //   setValue,
  // } = colorStopsMethods;

  // const onSubmit = (data: any) => {
  //   alert("submitted");
  //   updateTheme(data, "colorScales", colorMode);
  // };

  // const handlePositionOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   setValue(colorDefaultState.value, "255 255 255");
  //   setColorDefaultState((prevState) => ({
  //     position: newValue,
  //     value: prevState.value,
  //   }));

  //   alert(newValue);
  // };

  return (
    <>
      <h4>Colors</h4>
      {children}
      {/* {colorScales &&
        Object.entries(colorScales).map(([colorKey, colorValue]) => (
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
    </>
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
