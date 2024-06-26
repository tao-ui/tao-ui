import { Meta, StoryFn } from "@storybook/react";
import { RxChevronDown } from "react-icons/rx";
import { RAW_HEX_CODES } from "../../../../../apps/web/data/settings";
import { Input, type InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    id: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
  args: {
    id: "input-1",
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  id: "input-1", // Ensure id is provided
  placeholder: "Enter your text",
};

export const InputWithList = Template.bind({});
InputWithList.args = {
  id: "input-2",
  placeholder: "Choose from the list",
  LeadIcon: <RxChevronDown size={18} style={{ strokeWidth: 1, color: RAW_HEX_CODES["neutral-cool-gray"] }} />,
  listData: ["Option 1", "Option 3 ", "Option 3"],
  variant: "list",
};

export const CustomInput = Template.bind({});
CustomInput.args = {
  id: "input-3",
  placeholder: "Custom Input",

  bgInput: "bg-red-500",
  shadow: "shadow-lg",
  inputSize: "p-8 h-16",
};
