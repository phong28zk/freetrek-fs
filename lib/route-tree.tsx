"use client"

import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router"
import { RootLayout } from "@/components/layout/root-layout"
import { HomePage } from "@/routes/home"
import { AboutPage } from "@/routes/about"
import { ProductsPage } from "@/routes/products"
import { NewsPage } from "@/routes/news"
import { ContactPage } from "@/routes/contact"
import { ProductDetailPage } from "@/routes/product-detail"
import { CheckoutPage } from "@/routes/checkout"
import { LoginPage } from "@/routes/account/login"
import { RegisterPage } from "@/routes/account/register"
import { AccountPage } from "@/routes/account"

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
})

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: (search.category as string) || "all",
    }
  },
})

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$productId",
  component: ProductDetailPage,
})

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
})

const accountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account",
  component: AccountPage,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/login",
  component: LoginPage,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/register",
  component: RegisterPage,
})

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: NewsPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
})

// Create route tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  productDetailRoute,
  checkoutRoute,
  accountRoute,
  loginRoute,
  registerRoute,
  newsRoute,
  contactRoute,
])
