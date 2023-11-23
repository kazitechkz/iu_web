import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";

const stat_exam_by_id_state = createFeatureSelector<ResponseData<StatByAttemptIdModel>>('statExamById');
export const statExamByIdStateSelector = createSelector(stat_exam_by_id_state, (state) => {
    return state;
})

