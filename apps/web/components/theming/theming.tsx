import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
// import { useTheming } from "./useTheming";
// import { ColorScales } from "./color-scales";
import { Controls } from "./controls";

export const Theming = () => {
  return (
    <main>
      <Controls>
        {/* <ColorScalesCtl colors="theming.colorScales">
                {/* <ButtonCtls  
                 backgroundColor="theming.color" 
                borderColors="theming.borderColors" 
                borderWidth="theming.borderWidth" 
                boxShadow="theming.boxShadow" 
                fontSize="theming.fontSize" 
                height="theming.height" 
                padding="theming.padding" 
                spacing="theming.spacing" 
                width="theming.width" 
            /> */}
        {/* <InputCtls 
            backgroundColor="theming.color" 
            borderColor="theming.borderColors" 
            borderWidth="theming.borderWidth" 
            boxShadow="theming.boxShadow" 
            height="theming.height" 
            padding="theming.padding" 
            width="theming.width" 
        />  */}
        {/* </ ColorScalesCtls> */}

        {/* etc */}
      </Controls>
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
        <Tabs.Content className="" value="tab1">
          {/* <ColorScales colors="theming.colorScales" /> */}
          {/* <Colors color="theming.colorVars" /> */}
          {/* <Buttons
                backgroundColor="theming.color"  
                borderColor="theming.borderColors" 
                borderWidth="theming.borderWidth" 
                boxShadow="theming.boxShadow" 
                fontSize="theming.fontSize" 
                height="theming.height" 
                padding="theming.padding" 
                spacing="theming.spacing" 
                width="theming.width" 
            /> */}
          {/* <Inputs 
             backgroundColor="theming.color" 
            borderColor="theming.borderColors" 
            borderWidth="theming.borderWidth" 
            boxShadow="theming.boxShadow" 
            height="theming.height" 
            padding="theming.padding" 
            width="theming.width" 
        /> */}
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
    </main>
  );
};
