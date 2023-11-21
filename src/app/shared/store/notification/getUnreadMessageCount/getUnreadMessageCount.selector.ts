import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_unread_message_count_state = createFeatureSelector<ResponseData<number>>('getUnreadMessageCount');

export const getUnreadMessageCountSelector = createSelector(get_unread_message_count_state, (state) => {
  return state;
})
