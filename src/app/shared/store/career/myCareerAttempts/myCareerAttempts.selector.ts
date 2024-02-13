import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

const my_career_attempts_state = createFeatureSelector<ResponseData<Pagination<CareerQuizAttempt[]>>>('myCareerAttempts');

export const myCareerAttemptsSelector = createSelector(my_career_attempts_state, (state) => {
  return state;
})
