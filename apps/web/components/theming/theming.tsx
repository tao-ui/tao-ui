import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "tao-react";
import { z } from "zod";
import { THEME_SETTINGS, type ThemeSettings } from "~/data/settings";
import { WrapContainer } from "../ui";
import { ColorScales } from "./color-scales";
import { ColorCtrl, ColorCtrls, ColorCtrlStop, Controls } from "./controls";
import { useTheming } from "./hook/useTheming";

export const Theming = () => {
  const { themeState, colorMethods, updateTheme } = useTheming();

  return (
    <main>
      <WrapContainer>
        <header className="w-full pb-16 pt-12">
          <h1 className="text-5xl font-bold leading-[4.5rem]">Theming</h1>
          <h2 className="text-2xl italic">Generate colors, CSS Variables and other options for your theme.</h2>
        </header>
        <div className="flex gap-4">
          <section className="w-full lg:w-1/2 xl:w-3/5">
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Theming</TabsTrigger>
                <TabsTrigger value="tab2">Code</TabsTrigger>
                <TabsTrigger value="tab3">UI Mailer</TabsTrigger>
                <TabsTrigger value="tab4">UI Dashboard</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="!bg-surface/70 p-4">
                <ColorScales colorScales={themeState.colorScales} />
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
          <div className="hidden w-1/2 rounded-area bg-surface/70 p-4 lg:block xl:w-2/5">
            <Controls>
              {/* TODO: research/test if memoization is needed */}
              <ColorCtrls
              // updateTheme={updateTheme}
              // colorScales={themeState.colorScales}
              // colorMethods={formMethods.colorMethods}
              >
                {themeState.colorScales &&
                  Object.entries(themeState.colorScales).map(([colorKey, colorValue]) => (
                    <ColorCtrl
                      key={colorKey}
                      colorMethods={colorMethods[colorKey]}
                      colorMode={themeState.colorMode}
                      colorValue={colorValue}
                      updateTheme={updateTheme}
                    >
                      {colorValue.stops.map((stop: any, i) => (
                        <ColorCtrlStop
                          key={`${colorValue.key}-${stop.key}`}
                          colorKey={`${colorValue.key}-${stop.key}`}
                          colorMode={themeState.colorMode}
                          colorValue={stop[themeState.colorMode]}
                          updateTheme={updateTheme}
                        />
                      ))}
                    </ColorCtrl>
                  ))}
              </ColorCtrls>
            </Controls>
          </div>
        </div>
      </WrapContainer>
    </main>
  );
};
