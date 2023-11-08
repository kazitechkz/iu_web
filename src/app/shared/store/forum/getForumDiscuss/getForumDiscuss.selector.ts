import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetForumDiscussModel} from "./getForumDiscuss.model";

const get_forum_discuss_state = createFeatureSelector<ResponseData<GetForumDiscussModel>>('getForumDiscuss');

export const getForumDiscussSelector = createSelector(get_forum_discuss_state, (state) => {
  return state;
})
