"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Tin tức & Blog</h1>
        <p className="text-muted-foreground text-lg">Mẹo du lịch, hướng dẫn chọn đồ và gợi ý điểm đến</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="group hover:shadow-lg transition-all cursor-pointer">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={`/travel-adventure-blog-.jpg?height=200&width=400&query=travel+adventure+blog+${i}`}
                alt={`Blog post ${i}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span>15 Tháng 1, 2025</span>
              </div>
              <CardTitle className="text-lg">Tiêu đề bài viết {i}</CardTitle>
              <CardDescription>
                Mô tả ngắn gọn về nội dung bài viết, mẹo du lịch hoặc hướng dẫn chọn đồ...
              </CardDescription>
              <Button variant="link" className="px-0 mt-2">
                Đọc thêm →
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
