import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAttemptByPromoCodeActionTypes} from "./getAttemptByPromoCode.action.types";
import {AttemptModel} from "../../../models/attempt";

export const getAttemptByPromoCodeAction = createAction(GetAttemptByPromoCodeActionTypes.OnGetAttemptByPromoCode,props<{requestData:string}>());
export const getAttemptByPromoCodeActionSuccess = createAction(GetAttemptByPromoCodeActionTypes.OnGetAttemptByPromoCodeSuccess, props<{
  responseData: ResponseData<AttemptModel>
}>());
export const getAttemptByPromoCodeActionFailure = createAction(GetAttemptByPromoCodeActionTypes.OnGetAttemptByPromoCodeFailure, props<{ errors: any }>());
