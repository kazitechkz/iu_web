import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetSubCategoryQuestionCountModel} from "./getSubCategoryQuestionCount.model";

const get_sub_category_question_count_state = createFeatureSelector<ResponseData<GetSubCategoryQuestionCountModel>>('getSubCategoryQuestionCount');

export const getSubCategoryQuestionCountSelector = createSelector(get_sub_category_question_count_state, (state) => {
    return state;
})
