"use client"

import { VNPaymentForm } from "@/components/payment/VNPaymentForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart-store"
import { Link, useNavigate } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

export function VNPayPage() {
  const { items, total, clearCart } = useCartStore()
  const navigate = useNavigate()
  const [orderId] = useState(`ORDER-${Date.now()}`)

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate({ to: "/products" })
    }
  }, [items.length, navigate])

  const shippingFee = total >= 500000 ? 0 : 30000
  const finalTotal = total + shippingFee

  const order = {
    id: orderId,
    total: finalTotal,
    items: items.map(item => ({
      productId: item.product.id,
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    })),
  }

  const handlePaymentError = (error: string) => {
    console.error("Payment error:", error)
  }

  const handlePaymentComplete = (result: any) => {
    if (result.success) {
      clearCart()
      navigate({ to: "/orders" })
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link to="/checkout">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại thanh toán
          </Link>
        </Button>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Thanh toán đơn hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mã đơn hàng:</span>
                <span className="font-medium">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tổng tiền:</span>
                <span className="font-semibold text-lg text-primary">
                  {finalTotal.toLocaleString("vi-VN")} VND
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <VNPaymentForm
          order={order}
          onPaymentComplete={handlePaymentComplete}
          onPaymentError={handlePaymentError}
        />
      </div>
    </div>
  )
}
