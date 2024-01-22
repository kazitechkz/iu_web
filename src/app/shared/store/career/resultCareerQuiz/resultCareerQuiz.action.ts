import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ResultCareerQuizActionTypes} from "./resultCareerQuiz.action.types";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

export const resultCareerQuizAction = createAction(ResultCareerQuizActionTypes.OnResultCareerQuiz,props<{requestData:number}>());
export const resultCareerQuizActionSuccess = createAction(ResultCareerQuizActionTypes.OnResultCareerQuizSuccess, props<{
  responseData: ResponseData<CareerQuizAttempt>
}>());
export const resultCareerQuizActionFailure = createAction(ResultCareerQuizActionTypes.OnResultCareerQuizFailure, props<{ errors: any }>());
