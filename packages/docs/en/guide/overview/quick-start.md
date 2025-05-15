# Quick Start

## Installation

Install the package from npm.

::: code-group

```sh [npm]
npm install carronut-ui
```

```sh [pnpm]
pnpm add carronut-ui
```

```sh [yarn]
yarn add carronut-ui
```

```sh [bun]
bun add carronut-ui
```

:::

## Basic Usage

Import the component **and its styles** to use it:

```vue{2,3,7} [App.vue]
<script setup lang="ts">
import "carronut-ui/styles/cr-button.scss";
import { CrButton } from "carronut-ui";
</script>

<template>
  <CrButton> Hello Carronut! </CrButton>
</template>
```

> [!TIP]
> A significant portion of **components not displaying properly** is caused by incorrect import of component styles.
>
> It's recommended to refer to the resolver section below for automatic imports.

## Automatic Import

We provide two resolvers for automatically importing components and styles. They are fully compatible - you can use both simultaneously if desired.

### Auto Import Styles Only (Recommended)

> [!TIP]
> Recommended because this approach requires no additional dependencies while providing real-time type hints and auto-completion.

Add the following configuration in `vite.config.ts`:

```ts{2,6} [vite.config.ts]
import { defineConfig } from "vite";
import { CarronutUIStyleImporter } from "carronut-ui/resolver";

export default defineConfig({
  plugins: [
    CarronutUIStyleImporter()
  ]
});
```

Components need manual import while styles are auto-imported:

```vue{2,6} [App.vue]
<script setup>
import { CrButton } from "carronut-ui"; // manually import component
</script>

<template>
  <CrButton> Carronut! </CrButton>
</template>
```

> [!TIP]
> Normally you don't even need to manually import components. Just type `<CrButton>` (or any Carronut component) in the `<template>` and wait for **auto-completion**, as the IDE/Vue extension will automatically import them for you when **accepting auto-completion suggestions**.

### Auto Import Components and Styles

This method requires no manual imports for components or styles. We use [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) and [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) to enable full auto-import capability.

Install dependencies:

::: code-group

```sh [npm]
npm install -D unplugin-auto-import unplugin-vue-components
```

```sh [pnpm]
pnpm add -D unplugin-auto-import unplugin-vue-components
```

```sh [yarn]
yarn add -D unplugin-auto-import unplugin-vue-components
```

```sh [bun]
bun add -D unplugin-auto-import unplugin-vue-components
```

:::

Add configurations in `vite.config.ts` and `tsconfig.json`:

::: code-group

```ts{2-4,8-14} [vite.config.ts]
import { defineConfig } from "vite";
import { CarronutUIResolver } from "carronut-ui/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    Components({
      // dts: "./components.d.ts",  // default component dts file
      resolvers: [CarronutUIResolver()]
    }),
    AutoImport({
      resolvers: [CarronutUIResolver()]
    })
  ]
});
```

```json{3} [tsconfig.json]
{
  "include": [
    "components.d.ts" // add your component dts file here
  ]
}
```

:::

::: warning

**Please note** that the type definition file is generated only if the following conditions are met:

- The component is used in `<template>` (e.g., `<CrButton></CrButton>`)
- No manual import statement is written
- Vite is running to trigger the plugin:
  - In development mode, refresh the page to trigger the plugin
  - In build mode, type definitions will be auto-generated

Don't forget to include the type definition files in `tsconfig.json` (or `tsconfig.app.json`)

:::

Use components directly without any import statements:

```vue{2} [App.vue]
<template>
  <CrButton> Carronut! </CrButton>
</template>
```

## Explore Components

Visit [Component Overview](/en/components/overview) to learn about all components provided by Carronut UI.

## View Examples

TBD
