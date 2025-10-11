"use client"

import type { ReactNode } from "react"
import { Link } from "@tanstack/react-router"
import { Card } from "@/components/ui/card"
import { Home, User } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Dashboard</h2>
            <nav className="flex flex-col gap-2">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
                activeProps={{ className: "bg-accent" }}
              >
                <Home className="h-4 w-4" />
                Overview
              </Link>
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
                activeProps={{ className: "bg-accent" }}
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
            </nav>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  )
}
