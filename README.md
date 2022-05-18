# Atom-ui

## 简介
+ A Vue.js 3 UI library
+ Less css & reuse css & customize theme

## Getting Started
### 安装
+ Npm/Yarn/pnpm
  ```sh
  npm install atom-vue-component
  npm install windicss -D
  # yarn
  yarn add atom-vue-component
  yarn install windicss -D
  # pnpm
  pnpm add atom-vue-component
  pnpm install windicss -D
  ```
### 配置Windicss
如果之前使用过tailwindcss的项目也可以直接使用 详见 <https://windicss.org/guide/>

配置windicss参考<https://windicss.org/guide/installation.html>

```js
// windicss.config.js
import { defineConfig } from "windicss/helpers";
import { colors, safeList } from "atom-vue-component/packages/windicss/index";
export default defineConfig({
  darkMode: "class",
  safelist: safeList,
  theme: {
    extend: {
      colors,
    },
  },
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      "index.html",
      "src/**/*.{vue,html,jsx,tsx,ts,js}",
      "node_modules/atom-vue-component/**/*.{vue,html,jsx,tsx,ts,js}",
    ],
    exclude: ["node_modules/**/*", ".git/**/*"],
  },
});
```

