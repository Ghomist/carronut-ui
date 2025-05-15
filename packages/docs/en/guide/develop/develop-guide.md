# Development Guide

Recommend using VSCode + pnpm.

## Project Structure

```text
.
├── packages
│   ├── docs        // Documentation
│   ├── ui          // Carronut UI Library
│   └── examples    // Examples and Development Playground
└── package.json
```

## Quick Start

Install dependencies and launch dev server (packages/examples).

```bash
pnpm install
pnpm dev
```

Build packages.

```bash
pnpm build

# or build specific package
pnpm build:ui
```

Run unit tests (Vitest)

```bash
pnpm test

# or test specific package
pnpm test:ui
```

## Add Components

A component must have the following structure:

1. In `src/components` folder:
   1. `cr-<component-name>.vue`: The main component file.
   2. `defaults.ts`: The default props (if have) of the component.
   3. `types.d.ts`: The types of the props and emits (if have) of the component.
   4. `__tests__/cr-<component-name>.spec.ts`: The unit tests of the component.
2. `src/styles/cr-<component-name>.scss`: The styles of the component.

Please refer to the implementation of [buttons](https://github.com/Ghomist/carronut-ui/tree/master/packages/ui/src/components/buttons) for details.

Notices:

- Only components named with `cr-` prefix will be auto-exported (see [generate-exports.js](https://github.com/Ghomist/carronut-ui/blob/master/packages/ui/scripts/generate-exports.js#L22)).
- The style file name must be the same as the component file name, and be placed in `src/styles` folder.
- Every exported component must have a style file even if it is empty. This is for avoiding breaking our [resolvers](https://github.com/Ghomist/carronut-ui/blob/master/packages/ui/src/resolver.ts).

## Git

Commit message format:

```text
<type>: <subject>
<type>(<scope>): <subject>
```

Type list:

- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting, missing semi colons, etc
- refactor: refactoring production code
- test: adding missing tests
- chore: updating build tasks, package manager configs, etc
- ci: updating CI/CD configs
- perf: performance improvements
- revert: revert changes
- build: updating build system
- release: release new version
