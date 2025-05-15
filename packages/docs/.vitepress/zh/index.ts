import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { zhNav } from "./navbar";
import { zhSidebar } from "./sidebar";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "Carronut UI 文档",
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索"
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重制搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有找到相关结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "enter",
                  navigateText: "切换",
                  navigateUpKeyAriaLabel: "上方向键",
                  navigateDownKeyAriaLabel: "下方向键",
                  closeText: "关闭",
                  closeKeyAriaLabel: "esc"
                }
              }
            }
          }
        }
      }
    },
    notFound: {
      linkLabel: "返回首页",
      linkText: "返回首页",
      title: "页面未找到",
      quote: ""
    },
    nav: zhNav,
    sidebar: zhSidebar,
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    darkModeSwitchLabel: "深浅模式",
    footer: {
      message: "Released under the MIT License."
    },
    returnToTopLabel: "返回顶部",
    lastUpdated: {
      text: "上次更新"
    },
    outline: {
      level: [2, 6],
      label: "目录"
    },
    outlineTitle: "当前页大纲"
  }
};
