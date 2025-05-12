import vue from "@vitejs/plugin-vue";
import fs from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, PluginOption } from "vite";
import dts from "vite-plugin-dts";

const copyScssPlugin = (options: { source: string; target: string }) => {
  const pluginName = "copy-scss";
  const { source, target } = options;
  const srcDir = resolve(__dirname, source);
  const destDir = resolve(__dirname, target);
  return {
    name: pluginName,
    enforce: "post",
    closeBundle: () => {
      console.log(`[${pluginName}] ${srcDir} -> ${destDir}`);
      try {
        fs.cpSync(srcDir, destDir, {
          force: true,
          recursive: true,
          filter: src => fs.statSync(src).isDirectory() || src.endsWith(".scss")
        });
        console.log(`[${pluginName}] successful`);
      } catch (err) {
        console.error(`[${pluginName}] failed to copy SCSS files:`, err);
      }
    }
  } as PluginOption;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["src/**/*.d.ts", "src/**/*.ts", "src/**/*.vue"],
      outDir: "dist/types",
      staticImport: true,
      rollupTypes: true,
      tsconfigPath: "tsconfig.app.json",
      copyDtsFiles: true
    }),
    copyScssPlugin({
      source: "src/styles",
      target: "dist/styles"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    minify: false,
    outDir: "dist",
    lib: {
      entry: {
        index: "./src/index.ts",
        resolver: "./src/resolver.ts",
        styles: "./src/styles/index.scss"
      }
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          dir: "dist/es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs"
        },
        {
          format: "cjs",
          dir: "dist/lib",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js"
        }
      ]
    },
    cssCodeSplit: true,
    cssMinify: false
  }
});
