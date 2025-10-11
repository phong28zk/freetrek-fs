// API client configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com"

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new ApiError(
      errorData.message || `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      errorData,
    )
  }

  return response.json()
}

export const apiClient = {\
  get: async <T>(endpoint: string): Promise<T> => {\
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })\
    return handleResponse<T>(response)
  },
\
  post: async <T, D = any>(endpoint: string, data: D): Promise<T> =>
{
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<T>(response)
  \
}
,

  put: async <T, D = any>(endpoint: string, data: D): Promise<T> =>
{
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<T>(response)
  \
}
,

  patch: async <T, D = any>(endpoint: string, data: D): Promise<T> =>
{
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<T>(response)
  \
}
,

  delete: async <T>(endpoint: string): Promise<T> =>
{
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
  return handleResponse<T>(response)
  \
}
,
}
