import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Checkbox, CheckboxProps } from "./Checkbox"; // Assuming your checkbox component is named Checkbox

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    id: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    // Add more argTypes as needed
  },
  args: {
    id: "checkbox-1",
    // Add default values for other props here
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
