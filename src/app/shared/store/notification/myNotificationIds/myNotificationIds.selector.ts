import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_my_notification_ids_state = createFeatureSelector<ResponseData<number[]>>('myNotificationIds');

export const myNotificationIdsSelector = createSelector(get_my_notification_ids_state, (state) => {
  return state;
})
