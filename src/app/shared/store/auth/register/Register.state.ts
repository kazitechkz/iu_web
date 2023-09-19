import {ResponseData} from "../../response_data";

export interface RegisterState{
  success:boolean|null,
  errors:any,
  is_loading:boolean,
}


export const initialRegisterState: RegisterState = {
  success : null,
  errors: null,
  is_loading:false
};
