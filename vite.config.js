import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect if we're in production (Netlify/GitHub Pages/etc.)
const isProd = process.env.NODE_ENV === "production";

// If hosted in a subfolder, set it here (must match HashRouter basename)
const repoName = "Megha";

export default defineConfig({
  plugins: [react()],
  base: isProd ? `./` : "/", // Keep relative paths for production
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
