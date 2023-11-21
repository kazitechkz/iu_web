import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";

const get_notification_all_state = createFeatureSelector<ResponseData<Pagination<Notification[]>>>('getNotificationAll');

export const getNotificationAllSelector = createSelector(get_notification_all_state, (state) => {
  return state;
})
