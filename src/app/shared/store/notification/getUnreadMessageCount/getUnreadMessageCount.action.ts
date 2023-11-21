import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetUnreadMessageCountActionTypes} from "./getUnreadMessageCount.action.types";

export const getUnreadMessageCountAction = createAction(GetUnreadMessageCountActionTypes.GetUnreadMessageCountAction);
export const getUnreadMessageCountActionSuccess = createAction(GetUnreadMessageCountActionTypes.GetUnreadMessageCountActionSuccess, props<{
  responseData: ResponseData<number>
}>());
export const getUnreadMessageCountActionFailure = createAction(GetUnreadMessageCountActionTypes.GetUnreadMessageCountActionFailure, props<{ errors: any }>());
