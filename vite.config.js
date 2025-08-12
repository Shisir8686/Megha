import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Netlify deploys to the root of the domain, so the base is "/"
  base: "/", 
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});