import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_finish_attempt_selector = createFeatureSelector<ResponseData<number>>('finishAttempt');

export const finishAttemptSelector = createSelector(get_finish_attempt_selector, (state) => {
  return state;
})
