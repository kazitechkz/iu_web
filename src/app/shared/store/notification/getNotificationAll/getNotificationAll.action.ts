import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetNotificationAllActionTypes} from "./getNotificationAll.action.types";
import {GetNotificationAllRequest} from "./getNotificationAll.request";
import {Pagination} from "../../pagination";

export const getNotificationAllAction = createAction(GetNotificationAllActionTypes.GetNotificationAll,props<{
  requestData:GetNotificationAllRequest
}>());
export const getNotificationAllActionSuccess = createAction(GetNotificationAllActionTypes.GetNotificationAllSuccess, props<{
  responseData: ResponseData<Pagination<Notification[]>>
}>());
export const getNotificationAllActionFailure = createAction(GetNotificationAllActionTypes.GetNotificationAllFailure, props<{ errors: any }>());
