import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyNotificationIdsActionTypes} from "./myNotificationIds.action.types";

export const myNotificationIdsAction = createAction(MyNotificationIdsActionTypes.MyNotificationIdsAction);
export const MyNotificationIdsActionSuccess = createAction(MyNotificationIdsActionTypes.MyNotificationIdsActionSuccess, props<{
  responseData: ResponseData<number[]>
}>());
export const MyNotificationIdsActionFailure = createAction(MyNotificationIdsActionTypes.MyNotificationIdsActionFailure, props<{ errors: any }>());
