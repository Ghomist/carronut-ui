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

### Auto Import Styles

This is our recommendation, you need import components manually, and the styles will be auto imported.

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

In this case, you don't need to import components and styles manually. **But be cautious that the component will be lack of type hints (and autocompletion)**.

Config in `vite.config.ts`:

```ts
import { CarronutUIResolver } from "carronut-ui/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [CarronutUIResolver()]
    }),
    AutoImport({
      resolvers: [CarronutUIResolver()]
    })
  ]
});
```

And use the components directly. No import needed.

```html
<template>
  <CrButton> Carronut! </CrButton>
</template>
```

## Themes

TBD: Override Colors and Variables

## Development

See [contribute.md](./CONTRIBUTE.md) for details.
