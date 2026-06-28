import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://deine-domain.de",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory"
  }
});
