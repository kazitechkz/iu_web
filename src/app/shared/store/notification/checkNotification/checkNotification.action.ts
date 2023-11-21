import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CheckNotificationActionTypes} from "./checkNotification.action.types";

export const checkNotificationAction = createAction(CheckNotificationActionTypes.CheckNotificationAction,props<{
  requestData:number
}>());
export const checkNotificationActionSuccess = createAction(CheckNotificationActionTypes.CheckNotificationActionSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const checkNotificationActionFailure = createAction(CheckNotificationActionTypes.CheckNotificationActionFailure, props<{ errors: any }>());
