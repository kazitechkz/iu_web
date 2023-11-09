import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Plan} from "../../../models/plan.model";
import {Forum} from "../../../models/forum.model";
import {DiscussRating} from "../../../models/discussRating.model";

const rating_forum_state = createFeatureSelector<ResponseData<DiscussRating>>('ratingForum');

export const ratingForumSelector = createSelector(rating_forum_state, (state) => {
  return state;
})
