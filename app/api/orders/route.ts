import { NextResponse } from "next/server"
import { nhanhOrdersApi } from "@/lib/api/nhanh-orders"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, shippingAddress, paymentMethod, shippingFee } = body

    // Try to use Nhanh.vn API if configured
    if (process.env.NHANH_API_KEY) {
      const order = await nhanhOrdersApi.createOrder(items, shippingAddress, paymentMethod, shippingFee)
      return NextResponse.json({ success: true, order })
    }

    // Mock response if API not configured
    return NextResponse.json({
      success: true,
      order: {
        id: `ORD-${Date.now()}`,
        status: "pending",
      },
    })
  } catch (error) {
    console.error("[v0] Order creation error:", error)
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 })
  }
}
