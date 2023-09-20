import {ResponseData} from "../../response_data";

export interface LoginState {
  success:boolean|null,
  errors:any,
  token: string | null
}


export const initialLoginState: LoginState = {
  success : null,
  errors: null,
  token: null
};
