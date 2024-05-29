import type { Meta, StoryFn } from "@storybook/react";
import { RxPlus } from "react-icons/rx";
import { Button } from "./Button";

const type = {
  default: "default",
  secondary: "secondary",
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(type),
      control: { type: "inline-radio" },
    },
    size: {
      options: ["sm", "default", "lg"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: ["default", "ghost"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    disabled: false,
  },
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = "Default";
DefaultButton.args = {
  children: "Button",
  color: "default",
  size: "default",
  variant: "default",
};

export const IconButtonDefault = Template.bind({});
IconButtonDefault.storyName = "Icon";
IconButtonDefault.args = {
  color: "default",
  size: "icon",
  variant: "default",
};

const IconSvgDefault = <RxPlus size={18} style={{ strokeWidth: 1 }} />;

IconButtonDefault.args.children = <>{IconSvgDefault}</>;
