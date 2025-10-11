export interface ShippingAddress {
  fullName: string
  phone: string
  email: string
  address: string
  city: string
  district: string
  ward: string
  notes?: string
}

export type PaymentMethod = "cod" | "bank_transfer" | "momo" | "vnpay"

export interface Order {
  id: string
  items: Array<{
    productId: string
    productName: string
    quantity: number
    price: number
    image: string
  }>
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethod
  subtotal: number
  shippingFee: number
  total: number
  status: "pending" | "confirmed" | "shipping" | "delivered" | "cancelled"
  createdAt: string
  updatedAt: string
}
