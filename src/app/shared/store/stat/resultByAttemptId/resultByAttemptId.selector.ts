import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ResultByAttemptIdModel} from "./resultByAttemptId.action.model";

const get_result_by_attempt_id_state = createFeatureSelector<ResponseData<ResultByAttemptIdModel>>('resultByAttemptId');

export const resultByAttemptIdSelector = createSelector(get_result_by_attempt_id_state, (state) => {
  return state;
})
