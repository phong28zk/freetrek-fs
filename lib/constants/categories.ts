import type { ProductCategory } from "@/types/product"

export const categoryNames: Record<ProductCategory | "all", string> = {
  all: "Tất cả sản phẩm",
  ao: "Áo",
  "ao-mua": "Áo mưa",
  quan: "Quần",
  mu: "Mũ & Nón bảo hiểm",
  giay: "Giày",
  kinh: "Kính",
  "phu-kien-bao-ve": "Phụ kiện bảo vệ",
  balo: "Balo",
  tui: "Túi",
  "binh-nuoc": "Bình nước",
  "thung-chua": "Thùng chứa",
  gay: "Gậy trekking",
  "dung-cu": "Dụng cụ",
  "dung-cu-nau-an": "Dụng cụ nấu ăn",
  "do-trang-tri": "Đồ trang trí",
  leu: "Lều",
  tham: "Thảm",
  "tui-ngu": "Túi ngủ",
  nem: "Nệm hơi",
  goi: "Gối",
  ghe: "Ghế",
  ban: "Bàn",
  "xe-day": "Xe đẩy & Xe kéo",
}

// Main categories for navigation
export const mainCategories: Array<{ key: ProductCategory; name: string; subcategories?: ProductCategory[] }> = [
  {
    key: "ao",
    name: "Trang phục",
    subcategories: ["ao", "ao-mua", "quan"],
  },
  {
    key: "mu",
    name: "Mũ & Giày",
    subcategories: ["mu", "giay"],
  },
  {
    key: "balo",
    name: "Túi & Balo",
    subcategories: ["balo", "tui"],
  },
  {
    key: "leu",
    name: "Đồ cắm trại",
    subcategories: ["leu", "tham", "tui-ngu", "nem", "goi", "ghe", "ban"],
  },
  {
    key: "kinh",
    name: "Phụ kiện",
    subcategories: ["kinh", "phu-kien-bao-ve", "binh-nuoc", "dung-cu", "gay"],
  },
]
