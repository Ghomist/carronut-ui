import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import { CarronutUIResolver, CarronutUIStyleImporter } from "../ui/src/resolver";

const dev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    CarronutUIStyleImporter(),
    Components({
      resolvers: [CarronutUIResolver()]
    }),
    AutoImport({
      resolvers: [CarronutUIResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      // Use local UI lib directly to support HRM (dev only)
      "carronut-ui": dev ? fileURLToPath(new URL("../ui/src", import.meta.url)) : "carronut-ui"
    }
  }
});
