import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {PayCreateActionTypes} from "./payCreate.action.types";
import {PayModel} from "./pay.model";
import {PayRequest} from "./pay.request";

export const payCreateAction = createAction(PayCreateActionTypes.OnPayCreate, props<{request: PayRequest}>());
export const payCreateActionSuccess = createAction(PayCreateActionTypes.OnPayCreateSuccess, props<{
  responseData: ResponseData<PayModel>
}>());
export const payCreateActionFailure = createAction(PayCreateActionTypes.OnPayCreateFailure, props<{ errors: any }>());
