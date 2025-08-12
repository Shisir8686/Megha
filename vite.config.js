import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The name of your GitHub repository
const repoName = "Megha"; 

export default defineConfig({
  plugins: [react()],
  // GitHub Pages deploys to a subfolder, so the base must match the repo name
  base: `/${repoName}/`,
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});