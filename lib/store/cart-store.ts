import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartState, CartItem } from "@/types/cart"
import type { Product } from "@/types/product"

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (product: Product, quantity = 1) => {
        const items = get().items
        const existingItem = items.find((item) => item.product.id === product.id)

        let newItems: CartItem[]
        if (existingItem) {
          newItems = items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: Math.min(item.quantity + quantity, product.stockQuantity) }
              : item,
          )
        } else {
          newItems = [...items, { product, quantity: Math.min(quantity, product.stockQuantity) }]
        }

        const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

        set({ items: newItems, total, itemCount })
      },

      removeItem: (productId: string) => {
        const items = get().items.filter((item) => item.product.id !== productId)
        const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

        set({ items, total, itemCount })
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        const items = get().items.map((item) =>
          item.product.id === productId ? { ...item, quantity: Math.min(quantity, item.product.stockQuantity) } : item,
        )

        const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

        set({ items, total, itemCount })
      },

      clearCart: () => {
        set({ items: [], total: 0, itemCount: 0 })
      },
    }),
    {
      name: "freetrek-cart",
    },
  ),
)
