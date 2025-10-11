import { NextResponse } from "next/server"
import { nhanhProductsApi } from "@/lib/api/nhanh-products"
import { mockProductsApi } from "@/lib/data/mock-products"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const filters = {
    category: searchParams.get("category") || "all",
    search: searchParams.get("search") || undefined,
    sortBy: searchParams.get("sortBy") || "newest",
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    inStock: searchParams.get("inStock") === "true",
  }

  try {
    // Try to use Nhanh.vn API if configured
    if (process.env.NHANH_API_KEY) {
      const data = await nhanhProductsApi.getProducts(filters)
      return NextResponse.json(data)
    }

    // Fallback to mock data
    const data = await mockProductsApi.getProducts(filters)
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Products API error:", error)

    // Fallback to mock data on error
    const data = await mockProductsApi.getProducts(filters)
    return NextResponse.json(data)
  }
}
