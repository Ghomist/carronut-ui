import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { CarronutUIStyleImporter } from "../ui/src/resolver";

const dev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [CarronutUIStyleImporter()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      // Use local UI lib directly to support HRM (dev only)
      "carronut-ui": dev ? fileURLToPath(new URL("../ui/src", import.meta.url)) : "carronut-ui"
    }
  }
});
