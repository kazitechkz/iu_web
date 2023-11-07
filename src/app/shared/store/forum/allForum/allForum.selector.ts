import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Forum} from "../../../models/forum.model";

const all_forum_state = createFeatureSelector<ResponseData<Pagination<Forum[]>>>('allForum');

export const allForumSelector = createSelector(all_forum_state, (state) => {
  return state;
})
