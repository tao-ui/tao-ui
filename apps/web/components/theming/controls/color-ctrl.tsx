import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { RxChevronDown } from "react-icons/rx";
import { Form, FormControl, FormField, FormItem, FormMessage, Input, Label, Select } from "tao-react";
import { z } from "zod";
import { RAW_HEX_CODES, STOPS, type ColorScale } from "~/data/settings";
import { VALIDATE_MSG_RGB } from "~/data/validation";
import { isValidRGB } from "~/helpers/validation";
import { CtrlSubhead } from "./ctrl-subhead";
import { ColorCtrlProvider } from "./index";

interface Props extends HTMLAttributes<HTMLDivElement> {
  colorMethods: any;
  colorMode: string;
  colorValue: ColorScale;
  title: string;
  updateTheme: any;
}

export const ColorCtrl: FC<Props> = ({ children, colorMode, colorValue, colorMethods, title, updateTheme }) => {
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
    const fieldName = colorMode;
    const isValid = await methods.trigger(fieldName);

    if (isValid) {
      const payload: Record<string, string> = {
        colorNameKey: colorValue.key,
        colorMode: colorMode,
        [fieldName]: e.target.value,
      };
      updateTheme(payload, "color-scales", "patch-default-color");
    }
  };

  return (
    <ColorCtrlProvider methods={methods}>
      <CtrlSubhead title={colorValue.title} />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 pb-8">
        <Form {...methods}>
          <FormField
            control={control}
            name={`${colorValue.key}-${colorMode}`}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={`${colorValue.key}-${colorMode}`}>Default: {title}</Label>
                <FormControl>
                  <Input
                    id={`${colorValue.key}-${colorMode}`}
                    placeholder={`Enter ${colorMode} value`}
                    {...field}
                    onBlur={handleDefaultOnBlur}
                    bg="bg-level-2/70"
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
          <FormField
            control={control}
            name={`${colorValue.key}-position`}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor={`${colorValue.key}-position`}>Color Position</Label>
                <FormControl>
                  <Select
                    defaultValue="500"
                    LeadIcon={
                      <RxChevronDown size={18} style={{ strokeWidth: 1, color: RAW_HEX_CODES["neutral-cool-gray"] }} />
                    }
                    id={`${colorValue.key}-position`}
                    {...field}
                    bg="bg-level-2/70"
                  >
                    {STOPS.map((stop, index) => (
                      <option key={index} value={stop}>
                        {stop}
                      </option>
                    ))}
                    ,
                  </Select>
                </FormControl>

                <FormMessage>
                  {typeof errors[`${colorValue.key}-position`]?.message === "string"
                    ? (errors[`${colorValue.key}-position`]?.message as string)
                    : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {children}
        </Form>
      </div>
    </ColorCtrlProvider>
  );
};
