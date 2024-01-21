import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CareerQuiz} from "../../../models/careerQuiz.model";
import {GetCareerQuizActionTypes} from "./getCareerQuiz.action.types";

export const getCareerQuizAction = createAction(GetCareerQuizActionTypes.OnGetCareerQuiz,props<{requestData:number}>());
export const getCareerQuizActionSuccess = createAction(GetCareerQuizActionTypes.OnGetCareerQuizSuccess, props<{
  responseData: ResponseData<CareerQuiz>
}>());
export const getCareerQuizActionFailure = createAction(GetCareerQuizActionTypes.OnGetCareerQuizFailure, props<{ errors: any }>());
