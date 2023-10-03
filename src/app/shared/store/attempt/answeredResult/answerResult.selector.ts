import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";
import {AnswerResult} from "../../../models/answerResult.model";
import {AnsweredResult} from "./answeredResult";

const create_answered_result_selector = createFeatureSelector<ResponseData<AnsweredResult>>('answeredResult');

export const answeredResultSelector = createSelector(create_answered_result_selector, (state) => {
  return state;
})
