import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FindUserByEmailActionTypes} from "./findUserByEmail.action.types";
import {FindUserByEmailRequest} from "./findUserByEmail.request";
import {OrdinaryUser} from "../../../models/user.model";

export const findUserByEmailAction = createAction(FindUserByEmailActionTypes.FindUserByEmail,props<{
  requestData: FindUserByEmailRequest
}>());
export const findUserByEmailActionSuccess = createAction(FindUserByEmailActionTypes.FindUserByEmailSuccess, props<{
  responseData: ResponseData<OrdinaryUser>
}>());
export const findUserByEmailActionFailure = createAction(FindUserByEmailActionTypes.FindUserByEmailFailure, props<{ errors: any }>());
