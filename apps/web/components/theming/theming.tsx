import React, { use } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "tao-react";
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
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1"> Theming</TabsTrigger>
            <TabsTrigger value="tab2">Code</TabsTrigger>
            <TabsTrigger value="tab3">UI Mailer</TabsTrigger>
            <TabsTrigger value="tab4">UI Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <Buttons {...theming.buttonProps} />
            <Inputs {...theming.inputProps} />
          </TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
          <TabsContent value="tab4">Content 4</TabsContent>
        </Tabs>
      </section>
      <div className="ml-4 flex-1 bg-page p-2">
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
