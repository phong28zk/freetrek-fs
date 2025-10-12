"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@tanstack/react-router"
import { ArrowRight, Backpack, Tent, Shirt, Watch } from "lucide-react"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"
import { mockProducts } from "@/lib/data/mock-products"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export function HomePage() {
  const featuredProducts = mockProducts.slice(0, 4)
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  return (
    <div className="flex flex-col">
      <section className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[600px] lg:h-[800px]">
                <img
                  src="/image/Banner 1.png"
                  alt="Khuyến mãi mở bán - Freetrek"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[600px] lg:h-[800px]">
                <img
                  src="/image/Banner 2.png"
                  alt="Trang bị vững vàng - Tự do vững bước"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 size-10" />
          <CarouselNext className="right-4 size-10" />
        </Carousel>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Danh mục sản phẩm</h2>
            <p className="text-muted-foreground text-lg">Khám phá các nhóm sản phẩm nổi bật của Freetrek</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Lều */}
            <Link to="/products" search={{ category: "leu" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP1-LỀU.png"
                    alt="Lều"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Lều</CardTitle>
                  <CardDescription>Lều cắm trại đa dạng</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Áo chống nắng */}
            <Link to="/products" search={{ category: "ao" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP2-ACN.png"
                    alt="Áo chống nắng"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Áo chống nắng</CardTitle>
                  <CardDescription>Áo, áo khoác du lịch</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Áo gió */}
            <Link to="/products" search={{ category: "ao" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP3-ÁO GIÓ.png"
                    alt="Áo gió"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Áo khoác</CardTitle>
                  <CardDescription>Áo gió, áo mưa</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Balo */}
            <Link to="/products" search={{ category: "balo" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP4-BALO.png"
                    alt="Balo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Balo</CardTitle>
                  <CardDescription>Balo leo núi, du lịch</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Bình nước */}
            <Link to="/products" search={{ category: "binh-nuoc" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP5-Bình nước.png"
                    alt="Bình nước"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Bình nước</CardTitle>
                  <CardDescription>Bình giữ nhiệt, bình nước</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Túi ngủ */}
            <Link to="/products" search={{ category: "tui-ngu" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP6-Túi ngủ.png"
                    alt="Túi ngủ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Túi ngủ</CardTitle>
                  <CardDescription>Túi ngủ giữ ấm</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Gối */}
            <Link to="/products" search={{ category: "goi" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP7-Gối.png"
                    alt="Gối"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Gối</CardTitle>
                  <CardDescription>Gối hơi du lịch</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Ghế */}
            <Link to="/products" search={{ category: "ghe" }}>
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src="/image/SP8-GHẾ.png"
                    alt="Ghế"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Ghế</CardTitle>
                  <CardDescription>Ghế xếp dã ngoại</CardDescription>
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
              <Link to="/products" search={{ category: "all" }}>
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
            <Link to="/products" search={{ category: "all" }}>Khám phá ngay</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
