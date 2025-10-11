/**
 * Nhanh.vn API Client
 * Documentation: https://nhanh.vn/api/
 */

interface NhanhConfig {
  storeId: string
  apiKey: string
  secretKey: string
  baseUrl?: string
}

interface NhanhApiResponse<T> {
  code: number
  messages: string[]
  data: T
}

class NhanhClient {
  private config: NhanhConfig

  constructor(config: NhanhConfig) {
    this.config = {
      ...config,
      baseUrl: config.baseUrl || "https://open.nhanh.vn",
    }
  }

  private async request<T>(endpoint: string, data: Record<string, any> = {}): Promise<T> {
    const url = `${this.config.baseUrl}${endpoint}`

    const requestData = {
      storeId: this.config.storeId,
      apiKey: this.config.apiKey,
      ...data,
    }

    // Generate checksum for authentication
    const checksum = this.generateChecksum(requestData)

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...requestData,
        checksum,
      }),
    })

    if (!response.ok) {
      throw new Error(`Nhanh API error: ${response.statusText}`)
    }

    const result: NhanhApiResponse<T> = await response.json()

    if (result.code !== 1) {
      throw new Error(`Nhanh API error: ${result.messages.join(", ")}`)
    }

    return result.data
  }

  private generateChecksum(data: Record<string, any>): string {
    // Implement checksum generation according to Nhanh.vn documentation
    // This is a placeholder - actual implementation depends on Nhanh.vn's requirements
    const sortedKeys = Object.keys(data).sort()
    const dataString = sortedKeys.map((key) => `${key}=${data[key]}`).join("&")
    return `${dataString}${this.config.secretKey}`
  }

  // Product APIs
  async getProducts(params: {
    page?: number
    pageSize?: number
    categoryId?: string
    status?: number
  }) {
    return this.request("/api/product/search", params)
  }

  async getProduct(productId: string) {
    return this.request("/api/product/detail", { id: productId })
  }

  async updateProductStock(productId: string, quantity: number) {
    return this.request("/api/product/updateQuantity", {
      id: productId,
      quantity,
    })
  }

  // Order APIs
  async createOrder(orderData: {
    customerName: string
    customerMobile: string
    customerEmail: string
    customerAddress: string
    customerCityId: string
    customerDistrictId: string
    customerWardId: string
    products: Array<{
      id: string
      quantity: number
      price: number
    }>
    paymentMethod: string
    shippingFee: number
    note?: string
  }) {
    return this.request("/api/order/add", orderData)
  }

  async getOrder(orderId: string) {
    return this.request("/api/order/detail", { id: orderId })
  }

  async getOrders(params: {
    page?: number
    pageSize?: number
    fromDate?: string
    toDate?: string
    status?: number
  }) {
    return this.request("/api/order/search", params)
  }

  async updateOrderStatus(orderId: string, status: number) {
    return this.request("/api/order/updateStatus", {
      id: orderId,
      status,
    })
  }

  // Category APIs
  async getCategories() {
    return this.request("/api/category/index")
  }

  // Location APIs
  async getCities() {
    return this.request("/api/shipping/location/cities")
  }

  async getDistricts(cityId: string) {
    return this.request("/api/shipping/location/districts", { cityId })
  }

  async getWards(districtId: string) {
    return this.request("/api/shipping/location/wards", { districtId })
  }

  // Shipping APIs
  async calculateShippingFee(params: {
    cityId: string
    districtId: string
    weight: number
    length?: number
    width?: number
    height?: number
  }) {
    return this.request("/api/shipping/fee", params)
  }
}

// Initialize Nhanh client with environment variables
export const nhanhClient = new NhanhClient({
  storeId: process.env.NHANH_STORE_ID || "",
  apiKey: process.env.NHANH_API_KEY || "",
  secretKey: process.env.NHANH_SECRET_KEY || "",
})

export default NhanhClient
