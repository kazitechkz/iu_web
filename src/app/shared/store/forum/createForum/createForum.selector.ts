import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Plan} from "../../../models/plan.model";
import {Forum} from "../../../models/forum.model";

const create_forum_state = createFeatureSelector<ResponseData<Forum>>('createForum');

export const createForumSelector = createSelector(create_forum_state, (state) => {
  return state;
})
