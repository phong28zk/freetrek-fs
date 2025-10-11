import { nhanhClient } from "./nhanh-client"
import type { Product, ProductFilters } from "@/types/product"

/**
 * Transform Nhanh.vn product data to our Product type
 */
function transformNhanhProduct(nhanhProduct: any): Product {
  return {
    id: nhanhProduct.id,
    name: nhanhProduct.name,
    slug: nhanhProduct.code || nhanhProduct.id,
    description: nhanhProduct.description || "",
    price: Number.parseFloat(nhanhProduct.price),
    compareAtPrice: nhanhProduct.oldPrice ? Number.parseFloat(nhanhProduct.oldPrice) : undefined,
    category: mapNhanhCategory(nhanhProduct.categoryId),
    images: nhanhProduct.images || [],
    inStock: nhanhProduct.quantity > 0,
    stockQuantity: nhanhProduct.quantity,
    sku: nhanhProduct.code,
    tags: nhanhProduct.tags || [],
    specifications: nhanhProduct.attributes || {},
    createdAt: nhanhProduct.createdDateTime,
    updatedAt: nhanhProduct.lastModifiedDateTime,
  }
}

/**
 * Map Nhanh.vn category IDs to our category types
 */
function mapNhanhCategory(categoryId: string): "clothing" | "accessories" | "utilities" | "camping" {
  // This mapping should be configured based on your Nhanh.vn category structure
  const categoryMap: Record<string, "clothing" | "accessories" | "utilities" | "camping"> = {
    "1": "clothing",
    "2": "accessories",
    "3": "utilities",
    "4": "camping",
  }
  return categoryMap[categoryId] || "clothing"
}

export const nhanhProductsApi = {
  /**
   * Get products from Nhanh.vn with filters
   */
  async getProducts(filters: ProductFilters = {}) {
    try {
      const response = await nhanhClient.getProducts({
        page: 1,
        pageSize: 100,
        categoryId: filters.category && filters.category !== "all" ? filters.category : undefined,
        status: 1, // Active products only
      })

      const products = response.products.map(transformNhanhProduct)

      // Apply client-side filtering for features not supported by Nhanh API
      let filtered = products

      if (filters.search) {
        const search = filters.search.toLowerCase()
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search) ||
            p.tags.some((tag) => tag.toLowerCase().includes(search)),
        )
      }

      if (filters.minPrice) {
        filtered = filtered.filter((p) => p.price >= filters.minPrice!)
      }

      if (filters.maxPrice) {
        filtered = filtered.filter((p) => p.price <= filters.maxPrice!)
      }

      if (filters.inStock) {
        filtered = filtered.filter((p) => p.inStock)
      }

      // Apply sorting
      if (filters.sortBy) {
        switch (filters.sortBy) {
          case "price-asc":
            filtered.sort((a, b) => a.price - b.price)
            break
          case "price-desc":
            filtered.sort((a, b) => b.price - a.price)
            break
          case "name-asc":
            filtered.sort((a, b) => a.name.localeCompare(b.name))
            break
          case "name-desc":
            filtered.sort((a, b) => b.name.localeCompare(a.name))
            break
          case "newest":
            filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            break
        }
      }

      return {
        products: filtered,
        total: filtered.length,
        page: 1,
        pageSize: filtered.length,
        totalPages: 1,
      }
    } catch (error) {
      console.error("[v0] Nhanh API error:", error)
      // Fallback to mock data if API fails
      throw error
    }
  },

  /**
   * Get single product from Nhanh.vn
   */
  async getProduct(idOrSlug: string) {
    try {
      const response = await nhanhClient.getProduct(idOrSlug)
      return transformNhanhProduct(response)
    } catch (error) {
      console.error("[v0] Nhanh API error:", error)
      throw error
    }
  },

  /**
   * Get featured products
   */
  async getFeaturedProducts(limit = 8) {
    try {
      const response = await nhanhClient.getProducts({
        page: 1,
        pageSize: limit,
        status: 1,
      })
      return response.products.slice(0, limit).map(transformNhanhProduct)
    } catch (error) {
      console.error("[v0] Nhanh API error:", error)
      throw error
    }
  },
}
