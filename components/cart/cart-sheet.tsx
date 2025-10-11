"use client"

import { useCartStore } from "@/lib/store/cart-store"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CartSheet() {
  const { items, total, updateQuantity, removeItem } = useCartStore()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center">
        <p className="text-muted-foreground mb-4">Giỏ hàng của bạn đang trống</p>
        <Button asChild>
          <Link to="/products">Khám phá sản phẩm</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <ScrollArea className="flex-1 -mx-6 px-6">
        <div className="space-y-4 py-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border">
                <img
                  src={item.product.images[0] || "/placeholder.svg"}
                  alt={item.product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium line-clamp-2">{item.product.name}</h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7 bg-transparent"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7 bg-transparent"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stockQuantity}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="text-sm font-semibold">{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="space-y-4 pt-4">
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tạm tính</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Phí vận chuyển</span>
            <span>{total >= 500000 ? "Miễn phí" : formatPrice(30000)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold text-lg">
            <span>Tổng cộng</span>
            <span className="text-primary">{formatPrice(total >= 500000 ? total : total + 30000)}</span>
          </div>
        </div>
        <Button asChild className="w-full" size="lg">
          <Link to="/checkout">Thanh toán</Link>
        </Button>
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link to="/products">Tiếp tục mua sắm</Link>
        </Button>
      </div>
    </div>
  )
}
