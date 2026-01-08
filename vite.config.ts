import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Root base for Vercel (and local dev). For subpath deploy set base in build env and use same in Router.
export default defineConfig({
  base: "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
