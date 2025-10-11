"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle } from "lucide-react"
import { postFormSchema, type PostFormValues } from "@/lib/validations/post"
import { useCreatePost } from "@/hooks/use-posts"
import { toast } from "sonner"

export function PostForm() {
  const createPost = useCreatePost()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostFormValues>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: "",
      body: "",
      userId: 1,
    },
  })

  const onSubmit = async (data: PostFormValues) => {
    try {
      await createPost.mutateAsync(data)
      toast.success("Post created successfully!")
      reset()
    } catch (error) {
      toast.error("Failed to create post")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
        <CardDescription>Share your thoughts with the community</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* User ID Field */}
          <div className="space-y-2">
            <Label htmlFor="userId">
              User ID <span className="text-destructive">*</span>
            </Label>
            <Input id="userId" type="number" placeholder="1" {...register("userId", { valueAsNumber: true })} />
            {errors.userId && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.userId.message}
              </p>
            )}
          </div>

          {/* Title Field */}
          <div className="space-y-2">
            <Label htmlFor="title">
              Title <span className="text-destructive">*</span>
            </Label>
            <Input id="title" placeholder="Enter post title" {...register("title")} />
            {errors.title && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Body Field */}
          <div className="space-y-2">
            <Label htmlFor="body">
              Body <span className="text-destructive">*</span>
            </Label>
            <Textarea id="body" placeholder="Write your post content here..." rows={6} {...register("body")} />
            {errors.body && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.body.message}
              </p>
            )}
          </div>

          {/* Error Alert */}
          {createPost.isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Failed to create post. Please try again.</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting || createPost.isPending}>
            {isSubmitting || createPost.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Post"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
