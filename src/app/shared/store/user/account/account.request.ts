export interface LoginRequest {
    email: string,
    password: string
}

export interface ChangeProfileRequest {
  name: string
  password: string
  gender: number
  birth_date: string
  phone: string
}
