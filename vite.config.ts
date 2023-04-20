import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 가끔 화면이 먹통일 때 이 코드를 주석처리 했다가 해제하면 다시 잘 작동함.. (삽질기록)
});
