import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";
import {Pagination} from "../../pagination";

const all_attempt_selector = createFeatureSelector<ResponseData<Pagination<Attempt>>>('allAttempt');

export const allAttemptSelector = createSelector(all_attempt_selector, (state) => {
  return state;
})
