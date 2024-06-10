import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../Input/";
import { Label } from "../Label/";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./Form";

export default {
  title: "Components/Form",
  component: Input,
};

const rgbRegex = /^(\d{1,3})(?:, ?|,| )(\d{1,3})(?:, ?|,| )(\d{1,3})$/;

const isValidRGB = (value: string) => {
  const trimmedValue = value.trim();
  const match = trimmedValue.match(rgbRegex);
  if (!match) return false;
  return match.slice(1, 4).every((num) => Number(num) >= 0 && Number(num) <= 255);
};

const formSchema = z.object({
  rgb: z.string().refine(isValidRGB, {
    message: "RGB must be in the format 255, 255, 255 or similar and each number between 0 and 255.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
});
type FormData = z.infer<typeof formSchema>;

const Template: React.FC = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      rgb: "",
      email: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const [formData, setFormData] = React.useState<FormData>({
    rgb: "",
    email: "",
  });

  const onSubmit = (data: FormData) => {
    setFormData(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="rgb"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="rgb">Rgb</Label>
              <FormControl>
                <Input id="rgb" placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage>{errors.rgb?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <FormControl>
                <Input id="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage>{errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />

        <button type="submit">Show Results</button>
      </form>

      {formData && (
        <div>
          <h3>Form Data</h3>
          <p>
            <strong>Rgb:</strong> {formData.rgb}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};
