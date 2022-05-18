import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue(), WindiCSS()], // vite-plugin-vue
  resolve: {},
  test: {
    globals: true,
    environment: "jsdom",
  },
});
