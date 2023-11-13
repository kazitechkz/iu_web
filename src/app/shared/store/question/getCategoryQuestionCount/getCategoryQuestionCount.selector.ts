import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetCategoryQuestionCountModel} from "./getCategoryQuestionCount.model";

const get_category_question_count_state = createFeatureSelector<ResponseData<GetCategoryQuestionCountModel>>('getCategoryQuestionCount');

export const getCategoryQuestionCountSelector = createSelector(get_category_question_count_state, (state) => {
    return state;
})
