import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetCareerQuizGroupListActionTypes} from "./getCareerQuizGroupList.action.types";
import {GetCareerQuizGroupListModel} from "./getCareerQuizGroupList.model";

export const getCareerQuizGroupListAction = createAction(GetCareerQuizGroupListActionTypes.OnGetCareerQuizGroupList);
export const getCareerQuizGroupListActionSuccess = createAction(GetCareerQuizGroupListActionTypes.OnGetCareerQuizGroupListSuccess, props<{
  responseData: ResponseData<GetCareerQuizGroupListModel>
}>());
export const getCareerQuizGroupListActionFailure = createAction(GetCareerQuizGroupListActionTypes.OnGetCareerQuizGroupListFailure, props<{ errors: any }>());
