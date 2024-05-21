import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {UtmActionTypes} from "./utm.action.types";
import {UtmRequest} from "./utm.request";

export const UtmAction = createAction(UtmActionTypes.Utm, props<{req: UtmRequest}>());
export const UtmSuccess = createAction(UtmActionTypes.UtmSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const UtmFailure = createAction(UtmActionTypes.UtmFailure, props<{ errors: any }>());
