import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {NotificationType} from "../../../models/notificationType.model";

const get_notification_type_all_state = createFeatureSelector<ResponseData<NotificationType[]>>('getNotificationTypeAll');

export const getNotificationTypeAllSelector = createSelector(get_notification_type_all_state, (state) => {
  return state;
})
