import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { enNav } from "./nav-bar";
import { enSidebar } from "./sidebar";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "Carronut UI Docs",
  themeConfig: {
    search: {
      provider: "local"
    },
    nav: enNav,
    sidebar: enSidebar,
    footer: {
      message: "Released under the MIT License."
    },
    outline: {
      label: "TOC",
      level: [2, 6]
    }
  }
};
