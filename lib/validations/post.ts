import { z } from "zod"

export const postFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be less than 100 characters"),
  body: z.string().min(10, "Body must be at least 10 characters").max(500, "Body must be less than 500 characters"),
  userId: z.number().min(1, "User ID is required"),
})

export type PostFormValues = z.infer<typeof postFormSchema>
