import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
// import { useTheming } from "./useTheming";
// import { ColorScales } from "./color-scales";
import { Controls } from "./controls";

export const Theming = () => {
  return (
    <main>
      <Controls>
        {/* <ControlsColorScales colors="theming.colorScales" /> */}
        {/* etc */}
      </Controls>
      <Tabs.Root className="" defaultValue="tab1">
        <Tabs.List className="" aria-label="Manage your account">
          <Tabs.Trigger className="" value="tab1">
            Theming
            {/* <ColorScales colors="theming.colorScales" /> */}
            {/* <Colors color="theming.colorVars" /> */}
            {/* <BorderColors color="theming.borderColors" /> */}
            {/* etc */}
          </Tabs.Trigger>
          <Tabs.Trigger className="" value="tab2">
            Code
          </Tabs.Trigger>
          <Tabs.Trigger className="" value="tab3">
            UI Mailer
            {/* TODO: placeholder for content not created. But this is planned to be some sort of UI example. */}
          </Tabs.Trigger>
          <Tabs.Trigger className="" value="tab4">
            UI Dashboard
            {/* TODO: placeholder for content not created. But this is planned to be some sort of UI example. */}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="" value="tab1"></Tabs.Content>
        <Tabs.Content className="" value="tab2"></Tabs.Content>
        <Tabs.Content className="" value="tab3"></Tabs.Content>
        <Tabs.Content className="" value="tab4"></Tabs.Content>
      </Tabs.Root>
    </main>
  );
};
