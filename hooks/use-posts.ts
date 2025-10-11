import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "@/lib/api-client"
import { queryKeys } from "@/lib/query-keys"
import type { Post, CreatePostInput, UpdatePostInput } from "@/types/api"

// Fetch all posts
export function usePosts() {
  return useQuery({
    queryKey: queryKeys.posts.lists(),
    queryFn: () => apiClient.get<Post[]>("/posts"),
  })
}

// Fetch single post
export function usePost(id: number) {
  return useQuery({
    queryKey: queryKeys.posts.detail(id),
    queryFn: () => apiClient.get<Post>(`/posts/${id}`),
    enabled: !!id,
  })
}

// Fetch posts by user
export function useUserPosts(userId: number) {
  return useQuery({
    queryKey: queryKeys.userPosts(userId),
    queryFn: () => apiClient.get<Post[]>(`/users/${userId}/posts`),
    enabled: !!userId,
  })
}

// Create post mutation
export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreatePostInput) => apiClient.post<Post>("/posts", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() })
    },
  })
}

// Update post mutation
export function useUpdatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, ...data }: UpdatePostInput) => apiClient.put<Post>(`/posts/${id}`, data),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.posts.detail(data.id), data)
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() })
    },
  })
}

// Delete post mutation
export function useDeletePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => apiClient.delete(`/posts/${id}`),
    onSuccess: (_, id) => {
      queryClient.removeQueries({ queryKey: queryKeys.posts.detail(id) })
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() })
    },
  })
}
