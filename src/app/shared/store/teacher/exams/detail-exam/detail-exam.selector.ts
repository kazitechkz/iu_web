import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AttemptSetting} from "../../../../models/attemptSetting.model";
import {ResponseData} from "../../../response_data";

const get_detail_exam_by_id_state = createFeatureSelector<ResponseData<AttemptSetting>>('getDetailExamById');
export const getDetailExamByIdStateSelector = createSelector(get_detail_exam_by_id_state, (state) => {
    return state;
})
