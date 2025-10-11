"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "@/lib/api-client"
import { queryKeys } from "@/lib/query-keys"
import type { User } from "@/types/api"

// Fetch all users
export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users.lists(),
    queryFn: () => apiClient.get<User[]>("/users"),
  })
}

// Fetch single user
export function useUser(id: number) {
  return useQuery({
    queryKey: queryKeys.users.detail(id),
    queryFn: () => apiClient.get<User>(`/users/${id}`),
    enabled: !!id,
  })
}

// Create user mutation
export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Partial<User>) => apiClient.post<User>("/users", data),
    onSuccess: () => {
      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() })
    },
  })
}

// Update user mutation
export function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, ...data }: Partial<User> & { id: number }) => apiClient.put<User>(`/users/${id}`, data),
    onSuccess: (data) => {
      // Update the specific user in cache
      queryClient.setQueryData(queryKeys.users.detail(data.id), data)
      // Invalidate users list
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() })
    },
  })
}

// Delete user mutation
export function useDeleteUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => apiClient.delete(`/users/${id}`),
    onSuccess: (_, id) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: queryKeys.users.detail(id) })
      // Invalidate users list
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() })
    },
  })
}
