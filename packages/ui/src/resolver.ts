import type { ComponentResolver } from "unplugin-vue-components/types";
import type { PluginOption } from "vite";

const packageName = "carronut-ui";

const camelToKebab = (str: string) => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).slice(1);

/**
 * Auto import Carronut components (with styles).
 *
 * This resolver will automatically import the components (and their styles) that are using in Vue templates.
 * Powered by [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) and [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import).
 *
 * ## Usage
 * ```ts
 * // vite.config.ts
 * import { CarronutUIResolver } from "carronut-ui/resolver";
 * import AutoImport from "unplugin-auto-import/vite";
 * import Components from "unplugin-vue-components/vite";
 *
 * export default defineConfig({
 *   plugins: [
 *     // ...
 *     Components({
 *       resolvers: [CarronutUIResolver()]
 *     }),
 *     AutoImport({
 *       resolvers: [CarronutUIResolver()]
 *     })
 *   ]
 * });
 * ```
 */
export const CarronutUIResolver = (): ComponentResolver => {
  return {
    type: "component",
    resolve: name => {
      if (name.startsWith("Cr")) {
        const styleName = camelToKebab(name);
        const styleFile = `${packageName}/styles/${styleName}.scss`;
        return {
          name: name,
          from: packageName,
          sideEffects: styleFile
        };
      }
    }
  };
};

/**
 * Auto import Carronut component styles.
 *
 * This plugin will automatically import the styles of the components that are
 * imported from the package. This should be used only if your project is using
 * manual import of components.
 *
 * ## Usage
 * ```ts
 * // vite.config.ts
 * import { CarronutUIStyleImporter } from "carronut-ui/resolver";
 *
 * export default defineConfig({
 *   plugins: [
 *     // ...
 *     CarronutUIStyleImporter()
 *   ]
 * });
 * ```
 */
export const CarronutUIStyleImporter = (): PluginOption => {
  return {
    name: `${packageName}-style-importer`,
    transform(code) {
      // Detect style imports
      const styleImportRegex = new RegExp(
        `import\\s+["']${packageName}/styles/([^"']+)\\.scss["'];?`,
        "g"
      );
      const styles = new Set<string>();
      const styleMatches = code.matchAll(styleImportRegex);
      for (const match of styleMatches) {
        styles.add(match[1]);
      }

      // Detect imports from the package
      const importRegex = new RegExp(
        `import\\s+\\{([^}]+)\\}\\s+from\\s+["']${packageName}["'];?`,
        "g"
      );

      let insertionPoint = code.length;

      const styleImports: string[] = [];
      const matches = code.matchAll(importRegex);
      for (const match of matches) {
        // Use the very first import as the insertion point
        if (match.index < insertionPoint) insertionPoint = match.index;

        // Match all imports
        const components = match[1].split(",").map(c => c.trim());
        for (const comp of components) {
          if (comp.startsWith("Cr")) {
            const styleName = camelToKebab(comp);
            // Avoid duplicate imports
            if (styles.has(styleName)) continue;
            styleImports.push(`import "${packageName}/styles/${styleName}.scss";`);
          }
        }
      }

      if (!styleImports.length) return;

      return {
        code:
          code.slice(0, insertionPoint) +
          styleImports.join("\n") +
          "\n" +
          code.slice(insertionPoint)
      };
    }
  };
};
