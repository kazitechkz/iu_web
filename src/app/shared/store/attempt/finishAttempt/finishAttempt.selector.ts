import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FinishAttemptModel} from "./finishAttempt.model";

const get_finish_attempt_selector = createFeatureSelector<ResponseData<FinishAttemptModel>>('finishAttempt');

export const finishAttemptSelector = createSelector(get_finish_attempt_selector, (state) => {
  return state;
})
