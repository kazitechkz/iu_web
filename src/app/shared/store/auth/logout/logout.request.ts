import {Me} from "../../../models/user.model";

export interface LogoutRequest {
    email: string,
    password: string
}

export interface AuthInfo {
  token: string,
  role: string,
  user: Me,
  isFirst: boolean,
  redirectURL: string
}
