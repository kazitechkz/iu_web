import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetNotificationTypeAllActionTypes} from "./getNotificationTypeAll.action.types";
import {Pagination} from "../../pagination";
import {NotificationType} from "../../../models/notificationType.model";

export const getNotificationTypeAllAction = createAction(GetNotificationTypeAllActionTypes.GetNotificationTypeAll);
export const getNotificationTypeAllActionSuccess = createAction(GetNotificationTypeAllActionTypes.GetNotificationTypeAllSuccess, props<{
  responseData: ResponseData<NotificationType[]>
}>());
export const getNotificationTypeAllActionFailure = createAction(GetNotificationTypeAllActionTypes.GetNotificationTypeAllFailure, props<{ errors: any }>());
