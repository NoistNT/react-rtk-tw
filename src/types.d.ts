export type initialStateType = {
  users: Array<string>
  isLoading: boolean
  error: string | null | unknown
}

export type User = {
  id?: number
  name: string
  username: string
  email: string
  address: {
    city: string
  }
  phone: string
}
