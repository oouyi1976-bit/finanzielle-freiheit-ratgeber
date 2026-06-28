import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hundekompass-klar.pages.dev",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory"
  }
});
