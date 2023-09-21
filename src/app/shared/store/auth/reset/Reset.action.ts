import {createAction, props} from "@ngrx/store";
import {ResetActionTypes} from "./Reset.action.types";
import {ResetPasswordRequest, SendResetTokenRequest} from "./Reset.request";
import {ResponseData} from "../../response_data";

//Send Reset Token Action
export const sendResetTokenAction = createAction(ResetActionTypes.SendResetTokenAction, props<{
  requestData: SendResetTokenRequest
}>());
export const sendResetTokenSuccessAction = createAction(ResetActionTypes.SendResetTokenSuccessAction, props<{
  responseData: ResponseData<boolean>
}>());
export const sendResetTokenFailureAction = createAction(ResetActionTypes.SendResetTokenFailureAction, props<{
  errors: any
}>());
//Reset Password Action
export const resetPasswordAction = createAction(ResetActionTypes.ResetPasswordAction, props<{
  requestData: ResetPasswordRequest
}>());
export const resetPasswordSuccessAction = createAction(ResetActionTypes.ResetPasswordSuccessAction, props<{
  responseData: ResponseData<boolean>
}>());
export const resetPasswordFailureAction = createAction(ResetActionTypes.ResetPasswordFailureAction, props<{
  errors: any
}>());
