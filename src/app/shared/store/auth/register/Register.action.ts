import {Action, createAction, props} from "@ngrx/store";
import {RegisterActionTypes} from "./Register.action.types";
import {RegisterRequest} from "./RegisterRequest";
import {ResponseData} from "../../response_data";


export const registerAction = createAction(RegisterActionTypes.OnRegister,props<{requestData:RegisterRequest}>());
export const registerActionSuccess = createAction(RegisterActionTypes.OnRegister,props<{responseData:ResponseData<boolean>}>());
export const registerActionFailure = createAction(RegisterActionTypes.OnRegister,props<{errors:any}>());
