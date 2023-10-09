import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ResultExamModel} from "../../../models/resultExam.model";

const get_result_exam_state = createFeatureSelector<ResponseData<ResultExamModel>>('resultStepExam');

export const getResultExamState = createSelector(get_result_exam_state, (state) => {
    return state;
})
