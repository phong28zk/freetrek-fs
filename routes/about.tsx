"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About This Project</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>Modern tools for building scalable web applications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Next.js 15</h3>
              <p className="text-sm text-muted-foreground">
                React framework with App Router, server components, and optimized builds
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tanstack Router</h3>
              <p className="text-sm text-muted-foreground">
                Type-safe routing with nested routes, route guards, and parameter validation
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tanstack Query</h3>
              <p className="text-sm text-muted-foreground">
                Powerful data synchronization with automatic caching, background updates, and error handling
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ShadCN UI</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful, accessible components built on Radix UI with Tailwind CSS styling
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>What makes this stack powerful</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Full TypeScript support with strict type checking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Automatic code splitting and lazy loading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Smart data caching and background synchronization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Responsive design with mobile-first approach</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Accessible components following WCAG guidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Production-ready with optimized builds</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
