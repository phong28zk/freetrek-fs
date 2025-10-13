export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  compareAtPrice?: number
  category: ProductCategory
  images: string[]
  inStock: boolean
  stockQuantity: number
  sku: string
  tags: string[]
  specifications?: Record<string, string>
  createdAt: string
  updatedAt: string
}

export type ProductCategory =
  | "trang-phuc" // Trang phục (Clothing & Accessories)
  | "cam-trai" // Cắm trại (Camping)
  | "do-du-lich" // Đồ du lịch (Travel Gear)
  | "phu-kien" // Phụ kiện (Accessories)

export interface ProductFilters {
  category?: ProductCategory | "all"
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  search?: string
  sortBy?: "price-asc" | "price-desc" | "name-asc" | "name-desc" | "newest"
}

export interface ProductListResponse {
  products: Product[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
