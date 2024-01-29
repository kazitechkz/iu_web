import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {CareerQuiz} from "../../../models/careerQuiz.model";

const get_career_quizzes_state = createFeatureSelector<ResponseData<Pagination<CareerQuiz[]>>>('getCareerQuizzes');

export const getCareerQuizzesSelector = createSelector(get_career_quizzes_state, (state) => {
  return state;
})
