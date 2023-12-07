import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Appeal} from "../../../models/appeal.model";

const get_my_appeal_question_by_id_state = createFeatureSelector<ResponseData<Appeal>>('getMyAppealQuestionById');

export const getMyAppealQuestionByIdSelector = createSelector(get_my_appeal_question_by_id_state, (state) => {
    return state;
})
