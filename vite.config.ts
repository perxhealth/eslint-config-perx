import { defineConfig } from "vite"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      // the proper extensions will be added
      fileName: "eslint-config-perxhealth",
      name: "PerxHealthESLintConfig",
    },
  },
})
