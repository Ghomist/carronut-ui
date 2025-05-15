import { DefaultTheme } from "vitepress";

export const zhNav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/zh/" },
  { text: "指南", link: "/zh/guide/overview/about-carronut-ui", activeMatch: "/zh/guide/" },
  { text: "组件", link: "/zh/components/overview/all-components", activeMatch: "/zh/components/" }
];
