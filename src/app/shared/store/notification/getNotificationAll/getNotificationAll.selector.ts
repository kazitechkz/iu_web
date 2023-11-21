import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {NotificationModel} from "../../../models/notification.model";

const get_notification_all_state = createFeatureSelector<ResponseData<Pagination<NotificationModel[]>>>('getNotificationAll');

export const getNotificationAllSelector = createSelector(get_notification_all_state, (state) => {
  return state;
})
