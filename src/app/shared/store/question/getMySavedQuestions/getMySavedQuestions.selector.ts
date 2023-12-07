import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Question} from "../../../models/question.model";

const get_my_saved_questions_state = createFeatureSelector<ResponseData<Pagination<Question[]>>>('getMySavedQuestions');

export const getMySavedQuestionsSelector = createSelector(get_my_saved_questions_state, (state) => {
    return state;
})
