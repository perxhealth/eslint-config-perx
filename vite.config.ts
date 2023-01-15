import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      // the proper extensions will be added
      fileName: "eslint-config-perxhealth",
      name: "PerxHealthESLintConfig",
    },
  },
})
