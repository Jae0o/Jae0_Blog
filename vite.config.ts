import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 번들링을 시작할때 라이브러리들을 대상으로 코드 스플리팅을 실행함
          if (id.includes("node_modules")) {
            const module = id.split("node_modules/").pop().split("/")[0];

            return `vendor/${module}`;
          }
        },
      },
    },
  },
});
