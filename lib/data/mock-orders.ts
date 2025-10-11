import type { Order } from "@/types/order"

export const mockOrders: Order[] = [
  {
    id: "ORD-2025-001",
    items: [
      {
        productId: "1",
        productName: "Áo khoác chống nước Freetrek Pro",
        quantity: 1,
        price: 1290000,
        image: "/outdoor-jacket-waterproof.jpg?height=600&width=600&query=waterproof+outdoor+jacket",
      },
      {
        productId: "4",
        productName: "Mũ rộng vành chống nắng",
        quantity: 2,
        price: 199000,
        image: "/wide-brim-sun-hat.jpg?height=600&width=600&query=wide+brim+sun+protection+hat",
      },
    ],
    shippingAddress: {
      fullName: "Nguyễn Văn A",
      phone: "0123456789",
      email: "user@freetrek.vn",
      address: "123 Đường ABC",
      city: "TP. Hồ Chí Minh",
      district: "Quận 1",
      ward: "Phường Bến Nghé",
    },
    paymentMethod: "cod",
    subtotal: 1688000,
    shippingFee: 0,
    total: 1688000,
    status: "delivered",
    createdAt: "2025-01-05T10:30:00Z",
    updatedAt: "2025-01-08T14:20:00Z",
  },
  {
    id: "ORD-2025-002",
    items: [
      {
        productId: "2",
        productName: "Balo leo núi Freetrek Summit 40L",
        quantity: 1,
        price: 890000,
        image: "/hiking-backpack-40l.jpg?height=600&width=600&query=hiking+backpack+40L",
      },
    ],
    shippingAddress: {
      fullName: "Nguyễn Văn A",
      phone: "0123456789",
      email: "user@freetrek.vn",
      address: "123 Đường ABC",
      city: "TP. Hồ Chí Minh",
      district: "Quận 1",
      ward: "Phường Bến Nghé",
    },
    paymentMethod: "momo",
    subtotal: 890000,
    shippingFee: 0,
    total: 890000,
    status: "shipping",
    createdAt: "2025-01-10T15:45:00Z",
    updatedAt: "2025-01-11T09:00:00Z",
  },
]
