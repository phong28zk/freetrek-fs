import { nhanhClient } from "./nhanh-client"
import type { ShippingAddress, PaymentMethod } from "@/types/order"
import type { CartItem } from "@/types/cart"

/**
 * Map payment methods to Nhanh.vn format
 */
function mapPaymentMethod(method: PaymentMethod): string {
  const methodMap: Record<PaymentMethod, string> = {
    cod: "COD",
    bank_transfer: "BANK_TRANSFER",
    momo: "MOMO",
    vnpay: "VNPAY",
  }
  return methodMap[method]
}

export const nhanhOrdersApi = {
  /**
   * Create order in Nhanh.vn
   */
  async createOrder(
    items: CartItem[],
    shippingAddress: ShippingAddress,
    paymentMethod: PaymentMethod,
    shippingFee: number,
  ) {
    try {
      const orderData = {
        customerName: shippingAddress.fullName,
        customerMobile: shippingAddress.phone,
        customerEmail: shippingAddress.email,
        customerAddress: shippingAddress.address,
        customerCityId: shippingAddress.city,
        customerDistrictId: shippingAddress.district,
        customerWardId: shippingAddress.ward,
        products: items.map((item) => ({
          id: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
        })),
        paymentMethod: mapPaymentMethod(paymentMethod),
        shippingFee,
        note: shippingAddress.notes,
      }

      const response = await nhanhClient.createOrder(orderData)
      return response
    } catch (error) {
      console.error("[v0] Nhanh API error:", error)
      throw error
    }
  },

  /**
   * Get order details from Nhanh.vn
   */
  async getOrder(orderId: string) {
    try {
      const response = await nhanhClient.getOrder(orderId)
      return response
    } catch (error) {
      console.error("[v0] Nhanh API error:", error)
      throw error
    }
  },

  /**
   * Get user orders from Nhanh.vn
   */
  async getUserOrders(userId: string, page = 1, pageSize = 10) {
    try {
      const response = await nhanhClient.getOrders({
        page,
        pageSize,
      })
      return response
    } catch (error) {
      console.error("[v0] Nhanh API error:", error)
      throw error
    }
  },

  /**
   * Calculate shipping fee using Nhanh.vn
   */
  async calculateShippingFee(cityId: string, districtId: string, weight: number) {
    try {
      const response = await nhanhClient.calculateShippingFee({
        cityId,
        districtId,
        weight,
      })
      return response.fee
    } catch (error) {
      console.error("[v0] Nhanh API error:", error)
      // Return default shipping fee if API fails
      return 30000
    }
  },
}
