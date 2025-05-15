import { DefaultTheme } from "vitepress";

export const zhSidebar: DefaultTheme.Sidebar = {
  "/zh/guide/": [
    {
      text: "总览",
      base: "/zh/guide/overview/",
      collapsed: false,
      items: [
        { text: "关于 Carronut UI", link: `about-carronut-ui` },
        { text: "快速开始", link: `quick-start` }
      ]
    },
    {
      text: "开发",
      base: "/zh/guide/develop/",
      collapsed: false,
      items: [{ text: "开发指南", link: `develop-guide` }]
    }
  ],
  "/zh/components/": [
    {
      text: "总览",
      base: "/zh/components/overview/",
      collapsed: false,
      items: [{ text: "全部组件", link: `all-components` }]
    },
    {
      text: "基础组件",
      base: "/zh/components/basic/",
      collapsed: false,
      items: [{ text: "按钮", link: `buttons` }]
    }
  ]
};
