"use client"

import { useState } from "react"
import { VNPaymentForm } from "@/components/payment/VNPaymentForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  // Example order data - replace with your actual order data
  const [order] = useState({
    id: `ORDER-${Date.now()}`,
    total: 500000, // 500,000 VND
    items: [
      {
        id: "1",
        name: "Sản phẩm mẫu 1",
        price: 250000,
        quantity: 1,
      },
      {
        id: "2",
        name: "Sản phẩm mẫu 2",
        price: 250000,
        quantity: 1,
      },
    ],
  })

  const handlePaymentComplete = (result: any) => {
    console.log("✅ Payment completed:", result)
    // Handle successful payment
    // Navigate to success page or show success message
  }

  const handlePaymentError = (error: string) => {
    console.error("❌ Payment error:", error)
    // Handle payment error
    // Show error message to user
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Thanh toán đơn hàng</h1>
        <p className="text-muted-foreground">
          Hoàn tất thanh toán để xác nhận đơn hàng của bạn
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Tóm tắt đơn hàng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-muted-foreground">
                          Số lượng: {item.quantity}
                        </p>
                      </div>
                      <div className="font-medium">
                        {item.price.toLocaleString("vi-VN")} VND
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Order Total */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tạm tính</span>
                    <span>{order.total.toLocaleString("vi-VN")} VND</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí vận chuyển</span>
                    <span className="text-green-600">Miễn phí</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Tổng cộng</span>
                    <span className="text-primary">
                      {order.total.toLocaleString("vi-VN")} VND
                    </span>
                  </div>
                </div>

                {/* Order Info */}
                <div className="bg-muted p-3 rounded-lg text-xs space-y-1">
                  <p>
                    <span className="font-medium">Mã đơn hàng:</span> {order.id}
                  </p>
                  <p>
                    <span className="font-medium">Ngày tạo:</span>{" "}
                    {new Date().toLocaleString("vi-VN")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Chọn phương thức thanh toán</CardTitle>
              <p className="text-sm text-muted-foreground">
                Vui lòng chọn phương thức thanh toán phù hợp với bạn
              </p>
            </CardHeader>
            <CardContent>
              <VNPaymentForm
                order={order}
                onPaymentComplete={handlePaymentComplete}
                onPaymentError={handlePaymentError}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
