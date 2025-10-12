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
  | "ao" // Áo (Shirts/Jackets)
  | "ao-mua" // Áo mưa (Rain Coats)
  | "quan" // Quần (Pants)
  | "mu" // Mũ (Hats/Helmets)
  | "giay" // Giày (Shoes)
  | "kinh" // Kính (Glasses)
  | "phu-kien-bao-ve" // Phụ kiện bảo vệ (Protective Accessories)
  | "balo" // Balo (Backpacks)
  | "tui" // Túi (Bags)
  | "binh-nuoc" // Bình nước (Water Bottles)
  | "thung-chua" // Thùng chứa (Storage Containers)
  | "gay" // Gậy (Trekking Poles)
  | "dung-cu" // Dụng cụ (Tools & Equipment)
  | "dung-cu-nau-an" // Dụng cụ nấu ăn (Cooking Equipment)
  | "do-trang-tri" // Đồ trang trí (Decorations)
  | "leu" // Lều (Tents)
  | "tham" // Thảm (Mats)
  | "tui-ngu" // Túi ngủ (Sleeping Bags)
  | "nem" // Nệm (Air Mattresses)
  | "goi" // Gối (Pillows)
  | "ghe" // Ghế (Chairs)
  | "ban" // Bàn (Tables)
  | "xe-day" // Xe đẩy (Carts)

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
