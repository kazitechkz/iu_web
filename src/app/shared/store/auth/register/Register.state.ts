import {ResponseData} from "../../response_data";

export interface RegisterState{
  success:boolean|null,
  errors:any,
}

export const initialRegisterState: RegisterState = {
  success : null,
  errors: null,
};
