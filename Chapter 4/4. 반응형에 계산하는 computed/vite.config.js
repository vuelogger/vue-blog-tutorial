import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.vue-notion.workers.dev/v1/", // 실제 API 서버의 주소로 변경해야 합니다
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 실제 API 엔드포인트에 따라 변경해야 합니다
      },
    },
  },
});
