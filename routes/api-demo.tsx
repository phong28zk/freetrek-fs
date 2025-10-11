"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useUsers, useDeleteUser } from "@/hooks/use-users"
import { usePosts } from "@/hooks/use-posts"
import { AlertCircle, Loader2, Mail, Phone, Trash2, Globe } from "lucide-react"
import { toast } from "sonner"

export function ApiDemoPage() {
  const { data: users, isLoading: usersLoading, error: usersError } = useUsers()
  const { data: posts, isLoading: postsLoading } = usePosts()
  const deleteUser = useDeleteUser()

  const handleDeleteUser = async (id: number, name: string) => {
    try {
      await deleteUser.mutateAsync(id)
      toast.success(`User ${name} deleted successfully`)
    } catch (error) {
      toast.error("Failed to delete user")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">API Demo</h1>
        <p className="text-muted-foreground">Demonstrating Tanstack Query with JSONPlaceholder API</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Users</h2>
            <Badge variant="secondary">{users?.length || 0} total</Badge>
          </div>

          {usersError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Failed to load users. Please try again.</AlertDescription>
            </Alert>
          )}

          {usersLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {users?.slice(0, 5).map((user) => (
                <Card key={user.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{user.name}</CardTitle>
                        <CardDescription>@{user.username}</CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteUser(user.id, user.name)}
                        disabled={deleteUser.isPending}
                      >
                        {deleteUser.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      {user.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="h-4 w-4" />
                      {user.website}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Posts Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Posts</h2>
            <Badge variant="secondary">{posts?.length || 0} total</Badge>
          </div>

          {postsLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {posts?.slice(0, 10).map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <CardTitle className="text-base">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.body}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">User {post.userId}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Info Card */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>About This Demo</CardTitle>
          <CardDescription>Tanstack Query features demonstrated</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Automatic data fetching and caching</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Loading and error states handling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Mutations with cache invalidation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Optimistic updates and rollback</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Background refetching and synchronization</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
