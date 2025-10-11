import { apiClient } from "../api-client"
import type { Product, ProductFilters, ProductListResponse } from "@/types/product"

export const productsApi = {
  // Get all products with filters
  getProducts: async (filters: ProductFilters = {}): Promise<ProductListResponse> => {
    const params = new URLSearchParams()

    if (filters.category && filters.category !== "all") {
      params.append("category", filters.category)
    }
    if (filters.minPrice) params.append("minPrice", filters.minPrice.toString())
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice.toString())
    if (filters.inStock !== undefined) params.append("inStock", filters.inStock.toString())
    if (filters.search) params.append("search", filters.search)
    if (filters.sortBy) params.append("sortBy", filters.sortBy)

    return apiClient.get<ProductListResponse>(`/products?${params.toString()}`)
  },

  // Get single product by ID or slug
  getProduct: async (idOrSlug: string): Promise<Product> => {
    return apiClient.get<Product>(`/products/${idOrSlug}`)
  },

  // Get featured products
  getFeaturedProducts: async (limit = 8): Promise<Product[]> => {
    return apiClient.get<Product[]>(`/products/featured?limit=${limit}`)
  },

  // Get products by category
  getProductsByCategory: async (category: string, limit?: number): Promise<Product[]> => {
    const params = new URLSearchParams({ category })
    if (limit) params.append("limit", limit.toString())
    return apiClient.get<Product[]>(`/products/by-category?${params.toString()}`)
  },
}
