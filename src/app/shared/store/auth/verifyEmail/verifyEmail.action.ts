import {createAction, props} from "@ngrx/store";
import {VerifyEmailActionTypes} from "./verifyEmail.action.types";
import {VerifyEmailRequest} from "./verifyEmail.request";
import {ResponseData} from "../../response_data";

export const verifyEmailAction = createAction(VerifyEmailActionTypes.OnVerify, props<{ requestData: VerifyEmailRequest }>());
export const verifyActionSuccess = createAction(VerifyEmailActionTypes.OnVerifySuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const verifyActionFailure = createAction(VerifyEmailActionTypes.OnVerifyFailure, props<{ errors: any }>());
