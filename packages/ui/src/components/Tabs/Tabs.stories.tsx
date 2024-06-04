import type { Meta, StoryFn } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const type = {
  default: "default",
  secondary: "secondary",
};

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const Template: StoryFn = (args) => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content 1</TabsContent>
    <TabsContent value="tab2">Content 2</TabsContent>
    <TabsContent value="tab3">Content 3</TabsContent>
  </Tabs>
);

export const DefaultTabs = Template.bind({});
DefaultTabs.storyName = "Default";
DefaultTabs.args = {
  defaultValue: "tab1",
};

export const SecondaryTabs = Template.bind({});
SecondaryTabs.storyName = "Secondary";
SecondaryTabs.args = {
  defaultValue: "tab2",
};
