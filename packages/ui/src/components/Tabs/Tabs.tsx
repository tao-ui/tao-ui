"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import * as React from "react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={clsx("justify-left relative z-0 flex h-tab items-center gap-tab", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  bg?: string;
  bgActive?: string;
  bgDisabled?: string;
  padding?: string;
  rounded?: string;
  shadow?: string;
  shadowActive?: string;
  text?: string;
}

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  (
    {
      className,
      bg = "bg-level-2",
      bgActive = "data-[state=active]:bg-level-2",
      bgDisabled = "disabled:opacity-50",
      padding = "p-tab",
      rounded = "rounded-tab",
      shadow = "",
      shadowActive = "data-[state=active]:shadow-tab",
      text = "text-level-2-foreground",
      ...props
    },
    ref,
  ) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={clsx(
        "ring-offset-background focus-visible:ring-ring relative z-0 inline-flex h-full items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  disabled:pointer-events-none",
        bgActive,
        bgDisabled,
        bg,
        rounded,
        padding,
        shadow,
        shadowActive,
        text,
        className,
      )}
      {...props}
    />
  ),
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  bg?: string;
  padding?: string;
  rounded?: string;
  shadow?: string;
}

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
  (
    {
      className,
      bg = "bg-level-2",
      padding = "",
      rounded = "rounded-tab-content",
      shadow = "shadow-tab-content",
      ...props
    },
    ref,
  ) => (
    <TabsPrimitive.Content
      ref={ref}
      className={clsx(
        "ring-offset-background focus-visible:ring-ring relative z-10  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        bg,
        padding,
        rounded,
        shadow,
        className,
      )}
      {...props}
    />
  ),
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
