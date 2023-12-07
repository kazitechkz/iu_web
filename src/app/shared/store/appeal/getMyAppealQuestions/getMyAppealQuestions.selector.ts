import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Appeal} from "../../../models/appeal.model";

const get_my_appeal_questions_state = createFeatureSelector<ResponseData<Pagination<Appeal[]>>>('getMyAppealQuestions');

export const getMyAppealQuestionsSelector = createSelector(get_my_appeal_questions_state, (state) => {
    return state;
})
