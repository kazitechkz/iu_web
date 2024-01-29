import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {CareerQuiz} from "../../../models/careerQuiz.model";

const pass_career_quiz_state = createFeatureSelector<ResponseData<CareerQuiz>>('passCareerQuiz');

export const passCareerQuizSelector = createSelector(pass_career_quiz_state, (state) => {
  return state;
})
