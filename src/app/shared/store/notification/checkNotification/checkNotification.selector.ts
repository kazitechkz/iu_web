import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const check_notification_state = createFeatureSelector<ResponseData<boolean>>('checkNotification');

export const checkNotificationSelector = createSelector(check_notification_state, (state) => {
  return state;
})
