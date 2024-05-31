import * as Tabs from "@radix-ui/react-tabs";
import React, { use } from "react";
import { THEME_SETTINGS, type ThemeSettings } from "~/data/settings";
// import { ColorScales } from "./color-scales";
import { ButtonCtrls, Controls, InputCtrls } from "./controls";
import { Ctrl } from "./controls/ctrl";
import { Buttons, Inputs } from "./index";
import { useTheming } from "./useTheming";

export const Theming = () => {
  const theming = useTheming();

  return (
    <main className="flex">
      <section className="flex-1">
        <Tabs.Root defaultValue="tab1">
          <Tabs.List className="space-x-4 bg-neutral-cool-200 p-4" aria-label="Manage your account">
            <Tabs.Trigger className="" value="tab1">
              Theming
            </Tabs.Trigger>
            <Tabs.Trigger className="" value="tab2">
              Code
            </Tabs.Trigger>
            <Tabs.Trigger className="" value="tab3">
              UI Mailer{" "}
              {/* TODO: placeholder for content not created. But this is planned to be some sort of UI example. */}
            </Tabs.Trigger>
            <Tabs.Trigger className="" value="tab4">
              UI Dashboard{" "}
              {/* TODO: placeholder for content not created. But this is planned to be some sort of UI example. */}
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <section className="flex flex-col bg-neutral-cool-300 p-2 ">
              <Buttons {...theming.buttonProps} />
              <Inputs {...theming.inputProps} />
            </section>
            {/* etc */}
          </Tabs.Content>
          <Tabs.Content className="" value="tab2"></Tabs.Content>
          <Tabs.Content className="" value="tab3">
            {/* TODO: placeholder for content not created. But this is planned to be some sort of UI example. */}
          </Tabs.Content>
          <Tabs.Content className="" value="tab4">
            {/* TODO: placeholder for content not created. But this is planned to be some sort of UI example. */}
          </Tabs.Content>
        </Tabs.Root>
      </section>
      <div className="ml-4 flex-1 bg-neutral-cool-50 p-2">
        <Controls>
          <Ctrl title="Buttons Placeholder">
            <ButtonCtrls updateButtonOpts={theming.updateButtonOpts} {...theming.buttonProps} />
          </Ctrl>
          <Ctrl title="Inputs Placeholder">
            <InputCtrls {...theming.inputProps} />
          </Ctrl>
        </Controls>
      </div>
    </main>
  );
};
