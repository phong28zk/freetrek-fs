// API response types
export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export interface CreatePostInput {
  title: string
  body: string
  userId: number
}

export interface UpdatePostInput {
  id: number
  title?: string
  body?: string
  userId?: number
}
