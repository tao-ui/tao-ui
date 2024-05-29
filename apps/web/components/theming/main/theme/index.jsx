import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

export const Main = () => {
  return (
    <div>
      <Tabs.Root className="" defaultValue="tab1">
        <Tabs.List className="" aria-label="Manage your account">
          <Tabs.Trigger className="" value="tab1">
            Theming
          </Tabs.Trigger>
          <Tabs.Trigger className="" value="tab2">
            Code
          </Tabs.Trigger>
          <Tabs.Trigger className="" value="tab3">
            UI Mailer
          </Tabs.Trigger>
          <Tabs.Trigger className="" value="tab4">
            UI Dashboard
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="" value="tab1"></Tabs.Content>
        <Tabs.Content className="" value="tab2"></Tabs.Content>
        <Tabs.Content className="" value="tab3"></Tabs.Content>
        <Tabs.Content className="" value="tab4"></Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
