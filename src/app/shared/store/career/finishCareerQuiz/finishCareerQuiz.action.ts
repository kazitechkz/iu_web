import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FinishCareerQuizActionTypes} from "./finishCareerQuiz.action.types";
import {FinishCareerQuizRequest} from "./finishCareerQuiz.request";

export const finishCareerQuizAction = createAction(FinishCareerQuizActionTypes.OnFinishCareerQuiz,props<{requestData:FinishCareerQuizRequest}>());
export const finishCareerQuizActionSuccess = createAction(FinishCareerQuizActionTypes.OnFinishCareerQuizSuccess, props<{
  responseData: ResponseData<number>
}>());
export const finishCareerQuizActionFailure = createAction(FinishCareerQuizActionTypes.OnFinishCareerQuizFailure, props<{ errors: any }>());
