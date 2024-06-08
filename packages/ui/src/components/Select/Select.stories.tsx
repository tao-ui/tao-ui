import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { RxChevronDown } from "react-icons/rx";
import { RAW_HEX_CODES } from "../../../../../apps/web/data/settings";
import { Select, SelectProps } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    id: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
  args: {
    id: "select-5",
    LeadIcon: <RxChevronDown size={18} style={{ strokeWidth: 1, color: RAW_HEX_CODES["neutral-cool-gray"] }} />,
    children: [
      <option key="Option 1" value="Option 1">
        Option 1
      </option>,
      <option key="Option 2" value="Option 2">
        Option 2
      </option>,
      <option key="Option 3" value="Option 3">
        Option 3
      </option>,
    ],
  },
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({});

// Children for SelectWithOptions story
DefaultSelect.argTypes = {
  children: {
    control: { type: "array" },
  },
};
