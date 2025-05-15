# 快速开始

## 安装

从 npm 安装包。

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

## 基础使用

在项目中导入组件 **及其样式** 即可使用：

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
> 相当一部分 **组件显示不出来的问题** 是因为没有正确导入组件的样式。
>
> 推荐参考下文使用解析器进行自动导入。

## 自动导入

我们有两个解析器用于自动导入组件和样式。它们是相互兼容的，所以如果你愿意，你可以同时使用它们。

### 仅自动导入样式（推荐）

> [!TIP]
> 推荐是因为该方式无需额外安装依赖，并且能够实时地提供良好的类型提示以及自动补全。

在 `vite.config.ts` 中添加如下配置：

```ts{2,6} [vite.config.ts]
import { defineConfig } from "vite";
import { CarronutUIStyleImporter } from "carronut-ui/resolver";

export default defineConfig({
  plugins: [
    CarronutUIStyleImporter()
  ]
});
```

使用时需要手动导入组件，样式可以被自动导入：

```vue{2,6} [App.vue]
<script setup>
import { CrButton } from "carronut-ui"; // 手动导入组件
</script>

<template>
  <CrButton> Carronut! </CrButton>
</template>
```

> [!TIP]
> 通常情况下，你甚至也不需要手动导入组件。只需在 `<template>` 内输入 `<CrButton>`（或 Carronut 中的任何组件）并等待 **自动补全**，因为 **接受自动补全** 的时候，IDE / Vue 扩展会自动帮你导入。

### 自动导入组件和样式

该方法完全不需要手动导入组件或样式。我们借助 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 和 [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) 来自动导入组件和样式。

安装依赖项：

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

在 `vite.config.ts` 和 `tsconfig.json` 中添加如下配置：

::: code-group

```ts{2-4,8-14} [vite.config.ts]
import { defineConfig } from "vite";
import { CarronutUIResolver } from "carronut-ui/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    Components({
      // dts: "./components.d.ts",  // 默认组件 dts 文件
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
    "components.d.ts" // 在这里添加你的组件 dts 文件
  ]
}
```

:::

::: warning

**请注意**，只有在满足以下条件时才会生成类型定义文件：

- 在 `<template>` 中使用了组件（例如 `<CrButton></CrButton>`）。
- 没有手动编写对应的导入语句。
- 启动了 vite 以触发插件：
  - 如果使用开发模式，需要刷新页面来触发插件。
  - 如果使用构建模式，类型定义将自动生成。

所以不要忘记在 `tsconfig.json`（或 `tsconfig.app.json`）中包含类型定义。

:::

可以直接使用组件，不需要任何导入语句：

```vue{2} [App.vue]
<template>
  <CrButton> Carronut! </CrButton>
</template>
```

## 浏览组件

可以前往 [组件总览](../../components/overview/all-components) 了解 Carronut UI 提供的所有组件。

## 查看示例

TBD
