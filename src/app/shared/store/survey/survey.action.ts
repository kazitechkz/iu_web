import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {SurveyActionTypes} from "./survey.action.types";
import {SurveyModel} from "../../models/survey.model";
import {SurveyRequest} from "./survey.request";

export const surveyGetAction = createAction(SurveyActionTypes.OnGetSurvey, props<{locale_id: number}>());
export const surveyGetActionSuccess = createAction(SurveyActionTypes.OnGetSurveySuccess, props<{
  responseData: ResponseData<SurveyModel>
}>());
export const surveyGetActionFailure = createAction(SurveyActionTypes.OnGetSurveyFailure, props<{ errors: any }>());
export const surveyAnswerAction = createAction(SurveyActionTypes.OnAnswerSurvey, props<{req: SurveyRequest}>());
export const surveyAnswerActionSuccess = createAction(SurveyActionTypes.OnAnswerSurveySuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const surveyAnswerActionFailure = createAction(SurveyActionTypes.OnAnswerSurveyFailure, props<{ errors: any }>());

