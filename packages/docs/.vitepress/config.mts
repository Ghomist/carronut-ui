import { defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { enConfig } from "./en";
import { zhConfig } from "./zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      ...zhConfig
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      ...enConfig
    }
  },
  markdown: {
    image: { lazyLoading: true },
    config: md => {
      md.use(groupIconMdPlugin);
    }
  },
  vite: {
    plugins: [groupIconVitePlugin()]
  }
});
