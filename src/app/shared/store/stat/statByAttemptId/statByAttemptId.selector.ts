import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {StatByAttemptIdModel} from "./statByAttemptId.action.model";

const get_stat_by_attempt_id_state = createFeatureSelector<ResponseData<StatByAttemptIdModel>>('statByAttemptId');

export const statByAttemptIdSelector = createSelector(get_stat_by_attempt_id_state, (state) => {
  return state;
})
