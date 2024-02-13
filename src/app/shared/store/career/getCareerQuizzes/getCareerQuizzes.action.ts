import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetCareerQuizzesActionTypes} from "./getCareerQuizzes.action.types";
import {GetCareerQuizzesRequest} from "./getCareerQuizzes.request";
import {GetCareerQuizzesModel} from "./getCareerQuizzes.model";

export const getCareerQuizzesAction = createAction(GetCareerQuizzesActionTypes.OnGetCareerQuizzes,props<{requestData:GetCareerQuizzesRequest}>());
export const getCareerQuizzesActionSuccess = createAction(GetCareerQuizzesActionTypes.OnGetCareerQuizzesSuccess, props<{
  responseData: ResponseData<GetCareerQuizzesModel>
}>());
export const getCareerQuizzesActionFailure = createAction(GetCareerQuizzesActionTypes.OnGetCareerQuizzesFailure, props<{ errors: any }>());
