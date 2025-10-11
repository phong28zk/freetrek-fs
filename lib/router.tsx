"use client"

import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "./route-tree"
import { QueryProvider } from "@/components/providers/query-provider"
import { queryClient } from "./query-client"

// Create router instance
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  context: {
    queryClient,
  },
})

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Export RouterProvider component with QueryProvider wrapper
export function AppRouter() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}
