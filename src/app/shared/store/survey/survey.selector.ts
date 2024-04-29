import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {SurveyModel} from "../../models/survey.model";

const get_surveys_state = createFeatureSelector<ResponseData<SurveyModel>>('surveys');
export const getSurveysState = createSelector(get_surveys_state, (state) => {
  return state;
})
const answer_surveys_state = createFeatureSelector<ResponseData<boolean>>('answerSurveys');
export const answerSurveysStateSelector = createSelector(answer_surveys_state, (state) => {
  return state;
})
