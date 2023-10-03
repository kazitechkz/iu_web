import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";
import {AnswerResult} from "../../../models/answerResult.model";

const create_answer_selector = createFeatureSelector<ResponseData<AnswerResult>>('answer');

export const answerSelector = createSelector(create_answer_selector, (state) => {
  return state;
})
