import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";

const create_attempt_selector = createFeatureSelector<ResponseData<Attempt>>('createAttempt');

export const createAttemptSelector = createSelector(create_attempt_selector, (state) => {
  return state;
})
