# Carronut UI

A Vue 3 UI Component Library.

## Installation

Install package from npm.

```bash
pnpm add carronut-ui  # we recommend using pnpm

# or use any package manager is ok
npm install carronut-ui
```

## Usage

Simply import components and styles in your project. Or use resolvers for auto import. (See [Auto Import](#auto-import))

```tsx
<script setup lang="ts">
import "carronut-ui/styles/cr-button.css";
import { CrButton } from "carronut-ui";
</script>

<template>
  <CrButton> Hello Carronut! </CrButton>
</template>
```

## Auto Import

We have 2 resolvers for auto importing components and styles. They are compatible with each other, so you can use both of them if you want.

### Auto Import Styles Only

You need import components manually, and the styles will be auto imported.

Update your `vite.config.ts` with:

```ts
import { CarronutUIStyleImporter } from "carronut-ui/resolver";

export default defineConfig({
  plugins: [
    // ...
    CarronutUIStyleImporter()
  ]
});
```

And use component in your project:

```tsx
// Manual import components in <script>
import { CrButton } from "carronut-ui";

// Use it in template
<template>
  <CrButton> Carronut! </CrButton>
</template>;
```

> [!TIP]
> Most of the time, you don't need to import the component manually. Just type `CrButton` in `<template>` section and wait for **autocompletion**. The IDE / vue extension will automatically insert the import statements when you **accept it**.

### Auto Import Components and Styles

In this case, you don't need to import components and styles manually. We use [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) and [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) to auto import components and styles.

**Be cautious that** the type definition will be generated only when these conditions are met:

- The component is used in `<template>`.
- No import statement is written manually.
- Vite is launched.
  - If using dev mode, you need refresh the page to trigger the vite plugin.
  - If using build mode, the type definition will be generated automatically.

Config in `vite.config.ts`:

```ts
import { CarronutUIResolver } from "carronut-ui/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    // ...
    Components({
      // dts: "./components.d.ts",  // Default components dts file
      resolvers: [CarronutUIResolver()]
    }),
    AutoImport({
      resolvers: [CarronutUIResolver()]
    })
  ]
});
```

Don't forget to include the type definition in `tsconfig.json` (or `tsconfig.app.json`).

```json
{
  "include": [
    "components.d.ts" // Add your components dts file here
    // ...
  ]
  // ...
}
```

Use the components directly. No import needed.

```html
<template>
  <CrButton> Carronut! </CrButton>
</template>
```

## Themes

> [!WARNING] TBD
> Override Colors and Variables

## Icons

> [!WARNING] TBD

Based on [Iconify](https://iconify.design/), recommend icon set: [Mingcute](https://github.com/Richard9394/MingCute)

## I18n

> [!WARNING] TBD

## Development

See [contribute.md](./CONTRIBUTE.md) for details.
