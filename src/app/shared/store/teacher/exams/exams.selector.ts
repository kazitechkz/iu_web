import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const delete_exam_by_id_state = createFeatureSelector<ResponseData<boolean>>('deleteExamById');
export const deleteExamByIdStateSelector = createSelector(delete_exam_by_id_state, (state) => {
    return state;
})

const delete_unt_exam_by_id_state = createFeatureSelector<ResponseData<boolean>>('deleteUNTExamById');
export const deleteUNTExamByIdStateSelector = createSelector(delete_unt_exam_by_id_state, (state) => {
    return state;
})
