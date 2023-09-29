import {Action, createAction, props} from "@ngrx/store";
import {LoginActionTypes} from "./login.action.types";
import {LoginRequest} from "./loginRequest";
import {ResponseData} from "../../response_data";


export const loginAction = createAction(LoginActionTypes.OnLogin, props<{ requestData: LoginRequest }>());
export const loginActionSuccess = createAction(LoginActionTypes.OnLoginSuccess, props<{
    responseData: ResponseData<string>
}>());
export const loginActionFailure = createAction(LoginActionTypes.OnLoginFailure, props<{ errors: any }>());
