import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix(),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
  test: {
    environment: "happy-dom",
    exclude: ["node_modules/**", "tests/**"],
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
