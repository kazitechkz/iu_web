import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {News} from "../../../models/news.model";

const get_ai_answer_on_question_state = createFeatureSelector<ResponseData<string>>('getAIAnswerOnQuestion');

export const getAIAnswerOnQuestionSelector = createSelector(get_ai_answer_on_question_state, (state) => {
  return state;
})
