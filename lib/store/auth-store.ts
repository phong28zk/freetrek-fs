import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AuthState, User } from "@/types/user"

// Mock user for development
const mockUser: User = {
  id: "1",
  email: "user@freetrek.vn",
  fullName: "Nguyễn Văn A",
  phone: "0123456789",
  createdAt: new Date().toISOString(),
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock authentication - accept any email/password
        set({
          user: { ...mockUser, email },
          isAuthenticated: true,
        })
      },

      register: async (email: string, password: string, fullName: string, phone: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const newUser: User = {
          id: Date.now().toString(),
          email,
          fullName,
          phone,
          createdAt: new Date().toISOString(),
        }

        set({
          user: newUser,
          isAuthenticated: true,
        })
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        })
      },

      updateProfile: async (data: Partial<User>) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }))
      },
    }),
    {
      name: "freetrek-auth",
    },
  ),
)
