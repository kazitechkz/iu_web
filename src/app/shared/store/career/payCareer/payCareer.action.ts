import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {PayCareerActionTypes} from "./payCareer.action.types";
import {PayModel} from "../../paybox/pay_create/pay.model";
import {PayCareerRequest} from "./payCareer.request";

export const payCareerAction = createAction(PayCareerActionTypes.OnPayCareer,props<{requestData:PayCareerRequest}>());
export const payCareerActionSuccess = createAction(PayCareerActionTypes.OnPayCareerSuccess, props<{
  responseData: ResponseData<PayModel>
}>());
export const payCareerActionFailure = createAction(PayCareerActionTypes.OnPayCareerFailure, props<{ errors: any }>());
