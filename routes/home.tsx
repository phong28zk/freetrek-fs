"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@tanstack/react-router"
import { ArrowRight, Backpack, Tent, Shirt, Watch } from "lucide-react"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"
import { mockProducts } from "@/lib/data/mock-products"

export function HomePage() {
  const featuredProducts = mockProducts.slice(0, 4)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  return (
    <div className="flex flex-col">
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <img
          src="/forest-mountain-hiking-trail-adventure.jpg"
          alt="Freetrek Adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Trang bị vững vàng
            <br />
            Tự do vững bước
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto">
            Khám phá bộ sưu tập đồ du lịch và cắm trại chất lượng cao cho mọi hành trình
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/products">
                Mua sắm ngay <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 border-white text-white"
            >
              <Link to="/about">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Danh mục sản phẩm</h2>
            <p className="text-muted-foreground text-lg">Khám phá 4 nhóm sản phẩm chính của Freetrek</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1: Travel Clothing */}
            <Link to="/products" search={{ category: "clothing" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shirt className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Trang phục du lịch</CardTitle>
                  <CardDescription>Áo khoác, quần chống nước, áo giữ nhiệt</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Category 2: Accessories */}
            <Link to="/products" search={{ category: "accessories" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Watch className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phụ kiện</CardTitle>
                  <CardDescription>Mũ, túi, găng tay, bình nước</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Category 3: Travel Utilities */}
            <Link to="/products" search={{ category: "utilities" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Backpack className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Đồ du lịch tiện ích</CardTitle>
                  <CardDescription>Balo, túi đeo chéo, túi chống nước</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Category 4: Camping Gear */}
            <Link to="/products" search={{ category: "camping" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Tent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Đồ cắm trại</CardTitle>
                  <CardDescription>Lều, ghế xếp, bếp gas mini, dụng cụ nấu ăn</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Sản phẩm nổi bật</h2>
              <p className="text-muted-foreground">Những sản phẩm được yêu thích nhất</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">
                Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to="/products/$productId" params={{ productId: product.slug }}>
                <Card className="group hover:shadow-lg transition-all cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                      <AddToCartButton product={product} size="sm" showIcon={false} />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng cho chuyến phiêu lưu tiếp theo?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Khám phá bộ sưu tập đầy đủ của chúng tôi và trang bị cho hành trình của bạn
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/products">Khám phá ngay</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
