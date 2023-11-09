import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Plan} from "../../../models/plan.model";
import {Forum} from "../../../models/forum.model";
import {DiscussRating} from "../../../models/discussRating.model";
import {Discuss} from "../../../models/discuss.model";

const create_discuss_state = createFeatureSelector<ResponseData<Discuss>>('createDiscuss');

export const createDiscussSelector = createSelector(create_discuss_state, (state) => {
  return state;
})
