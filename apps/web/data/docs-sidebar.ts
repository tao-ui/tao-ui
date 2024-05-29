export interface DocsSidebarSection {
  title: string;
  href: string;
  items: DocsSidebarItem[];
}

export interface DocsSidebarItem {
  title: string;
  href: string;
  isNew?: boolean;
  isExternal?: boolean;
}

export const DOCS_SIDEBAR: DocsSidebarSection[] = [
  {
    title: "getting started",
    href: "/getting-started/",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "Quickstart", href: "/docs/getting-started/quickstart" },
    ],
  },
  {
    title: "integration guides",
    href: "/guides/",
    items: [
      { title: "Next.js", href: "/docs/guides/next-js", isNew: true },
      { title: "Astro", href: "/docs/guides/astro", isNew: true },
    ],
  },

  {
    title: "components",
    href: "/components/",
    items: [
      // { title: "Accordion", href: "/docs/components/accordion" },
      // { title: "Alert", href: "/docs/components/alert" },
      // { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      // { title: "Banner", href: "/docs/components/banner", isNew: true },
      // { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Button", href: "/docs/components/button" },
      // { title: "Button group", href: "/docs/components/button-group" },
    ],
  },
];
