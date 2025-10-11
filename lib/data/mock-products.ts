import type { Product } from "@/types/product"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Áo khoác chống nước Freetrek Pro",
    slug: "ao-khoac-chong-nuoc-freetrek-pro",
    description: "Áo khoác chống nước cao cấp với công nghệ DWR, phù hợp cho mọi điều kiện thời tiết",
    price: 1290000,
    compareAtPrice: 1590000,
    category: "clothing",
    images: ["/outdoor-jacket-waterproof.jpg?height=600&width=600&query=waterproof+outdoor+jacket"],
    inStock: true,
    stockQuantity: 45,
    sku: "FT-CLO-001",
    tags: ["chống nước", "du lịch", "leo núi"],
    specifications: {
      "Chất liệu": "Polyester 100%",
      "Trọng lượng": "350g",
      "Màu sắc": "Xanh rêu, Đen, Xám",
      Size: "S, M, L, XL, XXL",
    },
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "2",
    name: "Balo leo núi Freetrek Summit 40L",
    slug: "balo-leo-nui-freetrek-summit-40l",
    description: "Balo leo núi chuyên dụng 40L với hệ thống lưng thoáng khí và nhiều ngăn tiện ích",
    price: 890000,
    category: "utilities",
    images: ["/hiking-backpack-40l.jpg?height=600&width=600&query=hiking+backpack+40L"],
    inStock: true,
    stockQuantity: 32,
    sku: "FT-UTI-001",
    tags: ["balo", "leo núi", "trekking"],
    specifications: {
      "Dung tích": "40L",
      "Chất liệu": "Nylon chống nước",
      "Trọng lượng": "1.2kg",
      "Màu sắc": "Xanh dương, Đen, Xám",
    },
    createdAt: "2025-01-02T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "3",
    name: "Lều cắm trại 2 người Freetrek Dome",
    slug: "leu-cam-trai-2-nguoi-freetrek-dome",
    description: "Lều cắm trại 2 người thiết kế dome, dễ dựng, chống nước tốt",
    price: 1590000,
    compareAtPrice: 1990000,
    category: "camping",
    images: ["/camping-tent-2-person.jpg?height=600&width=600&query=camping+tent+2+person+dome"],
    inStock: true,
    stockQuantity: 18,
    sku: "FT-CAM-001",
    tags: ["lều", "cắm trại", "camping"],
    specifications: {
      "Sức chứa": "2 người",
      "Kích thước": "210 x 150 x 110 cm",
      "Trọng lượng": "2.5kg",
      "Chất liệu": "Polyester chống nước 3000mm",
    },
    createdAt: "2025-01-03T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "4",
    name: "Mũ rộng vành chống nắng",
    slug: "mu-rong-vanh-chong-nang",
    description: "Mũ rộng vành bảo vệ toàn diện khỏi ánh nắng mặt trời",
    price: 199000,
    category: "accessories",
    images: ["/wide-brim-sun-hat.jpg?height=600&width=600&query=wide+brim+sun+protection+hat"],
    inStock: true,
    stockQuantity: 67,
    sku: "FT-ACC-001",
    tags: ["mũ", "chống nắng", "phụ kiện"],
    specifications: {
      "Chất liệu": "Cotton pha polyester",
      "Màu sắc": "Be, Xanh rêu, Xám",
      Size: "Free size (56-58cm)",
    },
    createdAt: "2025-01-04T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "5",
    name: "Quần trekking chống nước",
    slug: "quan-trekking-chong-nuoc",
    description: "Quần trekking co giãn 4 chiều, chống nước, thoáng khí",
    price: 690000,
    category: "clothing",
    images: ["/trekking-pants-waterproof.jpg?height=600&width=600&query=trekking+pants+waterproof"],
    inStock: true,
    stockQuantity: 54,
    sku: "FT-CLO-002",
    tags: ["quần", "trekking", "chống nước"],
    specifications: {
      "Chất liệu": "Nylon co giãn",
      "Màu sắc": "Đen, Xám, Xanh navy",
      Size: "S, M, L, XL, XXL",
    },
    createdAt: "2025-01-05T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "6",
    name: "Bình nước giữ nhiệt 750ml",
    slug: "binh-nuoc-giu-nhiet-750ml",
    description: "Bình nước inox 304 giữ nhiệt 12 giờ, giữ lạnh 24 giờ",
    price: 349000,
    category: "accessories",
    images: ["/insulated-water-bottle-750ml.jpg?height=600&width=600&query=insulated+water+bottle+750ml"],
    inStock: true,
    stockQuantity: 89,
    sku: "FT-ACC-002",
    tags: ["bình nước", "giữ nhiệt", "phụ kiện"],
    specifications: {
      "Dung tích": "750ml",
      "Chất liệu": "Inox 304",
      "Màu sắc": "Đen, Xanh, Bạc",
    },
    createdAt: "2025-01-06T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "7",
    name: "Túi đeo chéo chống nước",
    slug: "tui-deo-cheo-chong-nuoc",
    description: "Túi đeo chéo nhỏ gọn, chống nước, phù hợp đi phượt",
    price: 290000,
    category: "utilities",
    images: ["/crossbody-bag-waterproof.jpg?height=600&width=600&query=crossbody+bag+waterproof"],
    inStock: true,
    stockQuantity: 43,
    sku: "FT-UTI-002",
    tags: ["túi", "đeo chéo", "chống nước"],
    specifications: {
      "Kích thước": "20 x 15 x 8 cm",
      "Chất liệu": "Nylon chống nước",
      "Màu sắc": "Đen, Xám, Xanh",
    },
    createdAt: "2025-01-07T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "8",
    name: "Bếp gas mini du lịch",
    slug: "bep-gas-mini-du-lich",
    description: "Bếp gas mini gọn nhẹ, dễ sử dụng cho cắm trại",
    price: 450000,
    category: "camping",
    images: ["/portable-camping-stove.jpg?height=600&width=600&query=portable+camping+gas+stove"],
    inStock: true,
    stockQuantity: 28,
    sku: "FT-CAM-002",
    tags: ["bếp gas", "cắm trại", "nấu ăn"],
    specifications: {
      "Trọng lượng": "180g",
      "Nhiên liệu": "Gas lon",
      "Công suất": "2800W",
    },
    createdAt: "2025-01-08T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
]

// Mock API functions for development
export const mockProductsApi = {
  getProducts: async (filters: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    let filtered = [...mockProducts]

    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter((p) => p.category === filters.category)
    }

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
      filtered = filtered.filter((p) => p.price >= filters.minPrice)
    }

    if (filters.maxPrice) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice)
    }

    if (filters.inStock) {
      filtered = filtered.filter((p) => p.inStock)
    }

    // Sorting
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
  },

  getProduct: async (idOrSlug: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const product = mockProducts.find((p) => p.id === idOrSlug || p.slug === idOrSlug)
    if (!product) throw new Error("Product not found")
    return product
  },

  getFeaturedProducts: async (limit = 8) => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return mockProducts.slice(0, limit)
  },
}
