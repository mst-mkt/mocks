import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {/* {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />} */}
    </>
  ),
})
