import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetCareerQuizModel} from "./getCareerQuiz.model";

const get_career_quiz_state = createFeatureSelector<ResponseData<GetCareerQuizModel>>('getCareerQuiz');

export const getCareerQuizSelector = createSelector(get_career_quiz_state, (state) => {
  return state;
})
