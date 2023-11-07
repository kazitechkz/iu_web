import {Me} from "../../../models/user.model";

export interface LoginRequest {
    email: string,
    password: string
}

export interface AuthInfo {
  token: string,
  role: string,
  user: Me
}
