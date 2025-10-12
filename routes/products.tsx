"use client"

import type React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearch, useNavigate, Link } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import { mockProductsApi } from "@/lib/data/mock-products"
import { Search } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"

export function ProductsPage() {
  const search = useSearch({ from: "/products" })
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState(search?.search || "")

  const category = search?.category || "all"
  const sortBy = search?.sortBy || "newest"

  const { data, isLoading } = useQuery({
    queryKey: ["products", { category, sortBy, search: search?.search }],
    queryFn: () => mockProductsApi.getProducts({ category, sortBy, search: search?.search }),
  })

  const categoryNames: Record<string, string> = {
    all: "Tất cả sản phẩm",
    ao: "Áo",
    "ao-mua": "Áo mưa",
    quan: "Quần",
    mu: "Mũ & Nón bảo hiểm",
    giay: "Giày",
    kinh: "Kính",
    "phu-kien-bao-ve": "Phụ kiện bảo vệ",
    balo: "Balo",
    tui: "Túi",
    "binh-nuoc": "Bình nước",
    "thung-chua": "Thùng chứa",
    gay: "Gậy trekking",
    "dung-cu": "Dụng cụ",
    "dung-cu-nau-an": "Dụng cụ nấu ăn",
    "do-trang-tri": "Đồ trang trí",
    leu: "Lều",
    tham: "Thảm",
    "tui-ngu": "Túi ngủ",
    nem: "Nệm hơi",
    goi: "Gối",
    ghe: "Ghế",
    ban: "Bàn",
    "xe-day": "Xe đẩy & Xe kéo",
  }

  const handleCategoryChange = (newCategory: string) => {
    navigate({
      to: "/products",
      search: { ...search, category: newCategory },
    })
  }

  const handleSortChange = (newSort: string) => {
    navigate({
      to: "/products",
      search: { ...search, sortBy: newSort },
    })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate({
      to: "/products",
      search: { ...search, search: searchInput || undefined },
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{categoryNames[category as string] || "Sản phẩm"}</h1>
        <p className="text-muted-foreground text-lg">Khám phá bộ sưu tập đồ du lịch và cắm trại chất lượng cao</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm sản phẩm..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="pl-10"
            />
          </div>
        </form>

        {/* Category Filter */}
        <Select value={category as string} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Danh mục" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(categoryNames).map(([key, name]) => (
              <SelectItem key={key} value={key}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sortBy as string} onValueChange={handleSortChange}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Sắp xếp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Mới nhất</SelectItem>
            <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
            <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
            <SelectItem value="name-asc">Tên: A-Z</SelectItem>
            <SelectItem value="name-desc">Tên: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      {data && <div className="mb-6 text-sm text-muted-foreground">Hiển thị {data.products.length} sản phẩm</div>}

      {/* Products Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} className="animate-pulse">
              <div className="aspect-square bg-muted rounded-t-lg" />
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-2/3" />
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : data && data.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((product) => (
            <Link key={product.id} to="/products/$productId" params={{ productId: product.slug }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.compareAtPrice && (
                    <Badge className="absolute top-2 right-2 bg-destructive">
                      -{Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute top-2 left-2 bg-muted text-muted-foreground">Hết hàng</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                      {product.compareAtPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                    </div>
                    <AddToCartButton product={product} size="icon" showIcon={false} />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">Không tìm thấy sản phẩm nào</p>
        </div>
      )}
    </div>
  )
}
