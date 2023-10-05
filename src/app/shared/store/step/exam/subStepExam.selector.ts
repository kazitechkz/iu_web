import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {SubStepExamModel} from "../../../models/question.model";

const get_sub_step_exam_state = createFeatureSelector<ResponseData<SubStepExamModel[]>>('subStepExam');

export const getSubStepExamState = createSelector(get_sub_step_exam_state, (state) => {
    return state;
})
