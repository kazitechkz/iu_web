import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

const result_career_quiz_state = createFeatureSelector<ResponseData<CareerQuizAttempt>>('resultCareerQuiz');

export const resultCareerQuizSelector = createSelector(result_career_quiz_state, (state) => {
  return state;
})
