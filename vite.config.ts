// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/pixel-perfect/" : "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static SPA shell for GitHub Pages (no Node/Cloudflare server).
    ...(githubPages
      ? {
          spa: { enabled: true },
          router: { basepath: "/pixel-perfect" },
        }
      : {}),
  },
  // Skip Nitro worker output when publishing a static site to GitHub Pages.
  nitro: githubPages ? false : undefined,
});
