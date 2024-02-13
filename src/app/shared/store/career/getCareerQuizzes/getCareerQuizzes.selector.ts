import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetCareerQuizzesModel} from "./getCareerQuizzes.model";

const get_career_quizzes_state = createFeatureSelector<ResponseData<GetCareerQuizzesModel>>('getCareerQuizzes');

export const getCareerQuizzesSelector = createSelector(get_career_quizzes_state, (state) => {
  return state;
})
