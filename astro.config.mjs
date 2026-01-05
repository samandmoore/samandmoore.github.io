import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://samandmoore.com",
  base: "/",
  integrations: [sitemap()],
});
