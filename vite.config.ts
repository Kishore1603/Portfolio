import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Set base to your GitHub repo name: e.g. '/Portfolio/'
  // Change 'Portfolio' below to match your exact GitHub repository name.
  base: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
