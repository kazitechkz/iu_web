import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {StatBySubjectIdModel} from "./statBySubjectId.action.model";

const get_stat_by_subject_id_state = createFeatureSelector<ResponseData<StatBySubjectIdModel>>('statBySubjectId');

export const statBySubjectIdSelector = createSelector(get_stat_by_subject_id_state, (state) => {
  return state;
})
