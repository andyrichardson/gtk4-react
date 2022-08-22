import electron from "vite-plugin-electron";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(electron);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    electron({
      main: {
        entry: "./src/electron/main.ts",
      },
    }),
    react(),
  ],
});
