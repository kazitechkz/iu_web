import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const save_question_selector = createFeatureSelector<ResponseData<boolean>>('saveQuestion');

export const saveQuestionSelector = createSelector(save_question_selector, (state) => {
  return state;
})
