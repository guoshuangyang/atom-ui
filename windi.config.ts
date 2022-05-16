import { defineConfig } from "windicss/helpers";
import { colors, safeList } from "./packages/windicss/index";
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
      "src/**/*.{vue,html,jsx,tsx}",
      "packages/**/*.{vue,html,jsx,tsx,ts,js}",
    ],
    exclude: ["node_modules/**/*", ".git/**/*"],
  },
});
