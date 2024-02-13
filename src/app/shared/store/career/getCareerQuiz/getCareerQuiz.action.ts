import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetCareerQuizActionTypes} from "./getCareerQuiz.action.types";
import {GetCareerQuizGroupListModel} from "../getCareerQuizGroupList/getCareerQuizGroupList.model";
import {GetCareerQuizModel} from "./getCareerQuiz.model";

export const getCareerQuizAction = createAction(GetCareerQuizActionTypes.OnGetCareerQuiz,props<{requestData:number}>());
export const getCareerQuizActionSuccess = createAction(GetCareerQuizActionTypes.OnGetCareerQuizSuccess, props<{
  responseData: ResponseData<GetCareerQuizModel>
}>());
export const getCareerQuizActionFailure = createAction(GetCareerQuizActionTypes.OnGetCareerQuizFailure, props<{ errors: any }>());
