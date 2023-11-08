import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetForumModel} from "./getForum.model";

const get_forum_state = createFeatureSelector<ResponseData<GetForumModel>>('getForum');

export const getForumSelector = createSelector(get_forum_state, (state) => {
  return state;
})
