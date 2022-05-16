import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import WindiCSS from "vite-plugin-windicss";
export default defineConfig({
  plugins: [vue(), WindiCSS()], // vite-plugin-vue
  resolve: {
    alias: { find: "packages", replacement: resolve(__dirname, "./packages") },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./packages/main.ts"),
      name: "atom-ui",
      fileName: (format) => `atom-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
