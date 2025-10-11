import { useQuery } from "@tanstack/react-query"
import { productsApi } from "@/lib/api/products"
import type { ProductFilters } from "@/types/product"

export function useProducts(filters: ProductFilters = {}) {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => productsApi.getProducts(filters),
  })
}

export function useProduct(idOrSlug: string) {
  return useQuery({
    queryKey: ["products", idOrSlug],
    queryFn: () => productsApi.getProduct(idOrSlug),
    enabled: !!idOrSlug,
  })
}

export function useFeaturedProducts(limit = 8) {
  return useQuery({
    queryKey: ["products", "featured", limit],
    queryFn: () => productsApi.getFeaturedProducts(limit),
  })
}

export function useProductsByCategory(category: string, limit?: number) {
  return useQuery({
    queryKey: ["products", "category", category, limit],
    queryFn: () => productsApi.getProductsByCategory(category, limit),
    enabled: !!category,
  })
}
