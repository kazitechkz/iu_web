export interface SendResetTokenRequest {
  email: string,
}

export interface ResetPasswordRequest {
  email: string,
  code: string,
  password: string
}
