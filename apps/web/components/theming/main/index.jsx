import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

export const Main = () => {
  return (
    <main>
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
