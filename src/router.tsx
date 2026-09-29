import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Match Vite `base` when deploying to GitHub Pages project site.
    ...(import.meta.env.BASE_URL !== "/"
      ? { basepath: import.meta.env.BASE_URL.replace(/\/$/, "") }
      : {}),
  });

  return router;
};
