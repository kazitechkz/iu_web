import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";


const finish_career_quiz_state = createFeatureSelector<ResponseData<number>>('finishCareerQuiz');

export const finishCareerQuizSelector = createSelector(finish_career_quiz_state, (state) => {
  return state;
})
