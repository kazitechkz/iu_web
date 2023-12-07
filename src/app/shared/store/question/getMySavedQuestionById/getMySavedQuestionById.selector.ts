import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Question} from "../../../models/question.model";

const get_my_saved_question_by_id_state = createFeatureSelector<ResponseData<Question>>('getMySavedQuestionById');

export const getMySavedQuestionByIdSelector = createSelector(get_my_saved_question_by_id_state, (state) => {
    return state;
})
