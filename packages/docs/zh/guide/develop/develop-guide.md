# 开发指南

建议使用 VSCode + pnpm。

## 项目结构

```
.
├── packages
│   ├── docs        // 文档
│   ├── ui          // Carronut UI 库
│   └── examples    // 示例和开发演示
└── package.json
```

## 快速开始

安装依赖项并启动开发服务器（packages/examples）。

```sh
pnpm install
pnpm dev
```

构建包。

```sh
pnpm build

# 或构建特定的包
pnpm build:ui
```

运行单元测试（Vitest）

```sh
pnpm test

# 或测试特定的包
pnpm test:ui
```

## 添加组件

一个组件必须具有以下结构：

1. 在 `src/components` 文件夹中：
   1. `cr-<component-name>.vue`：主组件文件。
   2. `defaults.ts`：组件的默认 props（如果有）。
   3. `types.d.ts`：组件的 props 和 emits 的类型（如果有）。
   4. `__tests__/cr-<component-name>.spec.ts`：组件的单元测试。
2. `src/styles/cr-<component-name>.scss`：组件的样式。

请参考 [buttons](https://github.com/Ghomist/carronut-ui/tree/master/packages/ui/src/components/buttons) 的实现了解更多细节。

注意事项：

- 只有以 `cr-` 为前缀的组件才会自动导出（详见 [generate-exports.js](https://github.com/Ghomist/carronut-ui/blob/master/packages/ui/scripts/generate-exports.js#L22)）。
- 为了保证 [resolvers](https://github.com/Ghomist/carronut-ui/blob/master/packages/ui/src/resolver.ts) 正常工作，样式文件要求如下：
  - 样式文件必须以 `.scss` 为后缀并直接位于 `src/styles` 文件夹下。
  - 样式文件名必须与组件文件名对应（例如 `cr-button.scss` 对应 `cr-button.vue`）
  - 每个导出的组件都必须有一个样式文件，即使它是空的。

## Git

提交消息格式：

```
<type>: <subject>
<type>(<scope>): <subject>
```

消息类型列表：

- feat：添加新功能
- fix：bug 修复
- docs：文档更新
- style：项目文件格式化，缺少分号、删除空行等
- refactor：重构功能实现、重构代码等
- test：更新测试代码
- chore：更新构建任务，包管理器配置等
- ci：更新 CI/CD 配置
