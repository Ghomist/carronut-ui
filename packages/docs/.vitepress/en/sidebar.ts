import { DefaultTheme } from "vitepress";

export const enSidebar: DefaultTheme.Sidebar = {
  "/en/guide/": [
    {
      text: "Overview",
      base: "/en/guide/overview/",
      collapsed: false,
      items: [
        { text: "About Carronut UI", link: `about-carronut-ui` },
        { text: "Quick Start", link: `quick-start` }
      ]
    },
    {
      text: "Develop",
      base: "/en/guide/develop/",
      collapsed: false,
      items: [{ text: "Develop Guide", link: `develop-guide` }]
    }
  ],
  "/en/components/": [
    {
      text: "Overview",
      base: "/en/components/overview/",
      collapsed: false,
      items: [{ text: "All Components", link: `all-components` }]
    },
    {
      text: "Basic",
      base: "/en/components/basic/",
      collapsed: false,
      items: [{ text: "Button", link: `buttons` }]
    }
  ]
};
