import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {SurveyModel} from "../../models/survey.model";

export const surveyAllAdapter = createEntityAdapter<SurveyModel>();
export const surveyAllState: EntityState<SurveyModel> = surveyAllAdapter.getInitialState();
export const surveyAnswerAdapter = createEntityAdapter<boolean>();
export const surveyAnswerState: EntityState<boolean> = surveyAnswerAdapter.getInitialState();
