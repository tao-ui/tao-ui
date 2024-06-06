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
    <main>
      <div className="container mx-auto">
        <header className="pb-16 pt-12">
          <h1 className="text-5xl font-bold leading-[4.5rem]">Theming</h1>
          <h2 className="text-2xl">Generate colors, CSS Variables and other options for your theme.</h2>
        </header>
        <div className="flex gap-4">
          <section className="flex-1">
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1"> Theming</TabsTrigger>
                <TabsTrigger value="tab2">Code</TabsTrigger>
                <TabsTrigger value="tab3">UI Mailer</TabsTrigger>
                <TabsTrigger value="tab4">UI Dashboard</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="!bg-surface/70 p-4">
                <Buttons {...theming.buttonProps} />
                <Inputs {...theming.inputProps} />
              </TabsContent>
              <TabsContent className="!bg-surface/70 p-4" value="tab2">
                Content 2
              </TabsContent>
              <TabsContent className="!bg-surface/70 p-4" value="tab3">
                Content 3
              </TabsContent>
              <TabsContent className="!bg-surface/70 p-4" value="tab4">
                Content 4
              </TabsContent>
            </Tabs>
          </section>
          <div className="flex-1 rounded-area bg-surface/70 p-4">
            <Controls>
              <p>temp content</p>
            </Controls>
          </div>
        </div>
      </div>
    </main>
  );
};
