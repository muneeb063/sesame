import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages friendly: use relative asset paths.
// If you deploy to a subpath (username.github.io/repo), set base to "/repo/".
export default defineConfig({
  base: "./",
  plugins: [react()],
});
