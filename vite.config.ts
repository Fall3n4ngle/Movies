import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@models": path.resolve(__dirname, "./src/models/index.ts"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@const": path.resolve(__dirname, "./src/const"),
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
    },
  },
});
