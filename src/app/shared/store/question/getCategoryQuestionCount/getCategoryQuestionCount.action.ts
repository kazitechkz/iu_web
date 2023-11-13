import {Action, createAction, props} from "@ngrx/store";
import {GetCategoryQuestionCountActionTypes} from "./getCategoryQuestionCount.action.types";
import {ResponseData} from "../../response_data";
import {GetCategoryQuestionCountRequest} from "./getCategoryQuestionCount.request";
import {GetCategoryQuestionCountModel} from "./getCategoryQuestionCount.model";

export const getCategoryQuestionCountAction = createAction(GetCategoryQuestionCountActionTypes.OnGetCategoryQuestionCount, props<{ requestData: GetCategoryQuestionCountRequest }>());
export const getCategoryQuestionCountActionSuccess = createAction(GetCategoryQuestionCountActionTypes.OnGetCategoryQuestionCountSuccess, props<{
    responseData: ResponseData<GetCategoryQuestionCountModel>
}>());
export const getCategoryQuestionCountActionFailure = createAction(GetCategoryQuestionCountActionTypes.OnGetCategoryQuestionCountFailure, props<{ errors: any }>());
