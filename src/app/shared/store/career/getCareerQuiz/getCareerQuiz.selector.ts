import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {CareerQuiz} from "../../../models/careerQuiz.model";

const get_career_quiz_state = createFeatureSelector<ResponseData<CareerQuiz>>('getCareerQuiz');

export const getCareerQuizSelector = createSelector(get_career_quiz_state, (state) => {
  return state;
})
