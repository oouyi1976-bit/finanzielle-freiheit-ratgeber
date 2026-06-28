import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://finanzielle-freiheit-ratgeber.pages.dev",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory"
  }
});
