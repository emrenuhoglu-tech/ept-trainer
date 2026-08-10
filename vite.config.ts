import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// host:true -> telefon ayni Wi-Fi'den http://<pc-ip>:5173 ile erisebilsin.
// /api -> Drill proxy (server/proxy.mjs, port 8787).
export default defineConfig({
  base: "/ept-trainer/",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": { target: "http://localhost:8787", changeOrigin: true },
    },
  },
});
