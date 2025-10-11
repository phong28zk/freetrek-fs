"use client"

import { Link } from "@tanstack/react-router"
import { Facebook, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">freetrek.</div>
            <p className="text-sm text-muted-foreground">Trang bị vững vàng - Tự do vững bước</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold">Sản phẩm</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/products" search={{ category: "clothing" }} className="hover:text-primary transition-colors">
                  Trang phục du lịch
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  search={{ category: "accessories" }}
                  className="hover:text-primary transition-colors"
                >
                  Phụ kiện
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  search={{ category: "utilities" }}
                  className="hover:text-primary transition-colors"
                >
                  Đồ du lịch tiện ích
                </Link>
              </li>
              <li>
                <Link to="/products" search={{ category: "camping" }} className="hover:text-primary transition-colors">
                  Đồ cắm trại
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Công ty</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Freetrek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
