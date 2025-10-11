"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart-store"
import type { Product } from "@/types/product"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"

interface AddToCartButtonProps {
  product: Product
  quantity?: number
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "outline" | "ghost"
  className?: string
  showIcon?: boolean
}

export function AddToCartButton({
  product,
  quantity = 1,
  size = "default",
  variant = "default",
  className,
  showIcon = true,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!product.inStock) {
      toast.error("Sản phẩm hết hàng", {
        description: "Sản phẩm này hiện đang hết hàng",
      })
      return
    }

    addItem(product, quantity)
    toast.success("Đã thêm vào giỏ hàng", {
      description: `${product.name} đã được thêm vào giỏ hàng`,
    })
  }

  return (
    <Button size={size} variant={variant} className={className} onClick={handleAddToCart} disabled={!product.inStock}>
      {showIcon && <ShoppingCart className="h-4 w-4 mr-2" />}
      {size === "icon" ? null : "Thêm vào giỏ"}
    </Button>
  )
}
