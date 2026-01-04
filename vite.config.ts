import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Must match the URL path where the app is served: https://vijayraja.me/career-guide-app/
  base: "/career-guide-app/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
