"use client"

import { UserForm } from "@/components/forms/user-form"
import { PostForm } from "@/components/forms/post-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FormsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Form Examples</h1>
        <p className="text-muted-foreground">
          Demonstrating React Hook Form with Zod validation and Tanstack Query mutations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <UserForm />
        <PostForm />
      </div>

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Form Features</CardTitle>
          <CardDescription>What's included in these forms</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Type-safe form validation with Zod schemas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>React Hook Form for efficient form state management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Real-time validation with helpful error messages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Integration with Tanstack Query mutations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Loading states and error handling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Toast notifications for user feedback</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Automatic form reset after successful submission</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
