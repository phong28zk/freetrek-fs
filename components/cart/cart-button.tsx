"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart-store"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CartSheet } from "./cart-sheet"

export function CartButton() {
  const itemCount = useCartStore((state) => state.itemCount)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-xs font-medium flex items-center justify-center text-accent-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Giỏ hàng</SheetTitle>
          <SheetDescription>
            {itemCount > 0 ? `Bạn có ${itemCount} sản phẩm trong giỏ hàng` : "Giỏ hàng của bạn đang trống"}
          </SheetDescription>
        </SheetHeader>
        <CartSheet />
      </SheetContent>
    </Sheet>
  )
}
