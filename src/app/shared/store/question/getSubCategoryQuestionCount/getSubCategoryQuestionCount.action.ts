import {Action, createAction, props} from "@ngrx/store";
import {GetSubCategoryQuestionCountActionTypes} from "./getSubCategoryQuestionCount.action.types";
import {ResponseData} from "../../response_data";
import {GetSubCategoryQuestionCountRequest} from "./getSubCategoryQuestionCount.request";
import {GetSubCategoryQuestionCountModel} from "./getSubCategoryQuestionCount.model";

export const getSubCategoryQuestionCountAction = createAction(GetSubCategoryQuestionCountActionTypes.OnGetSubCategoryQuestionCount, props<{ requestData: GetSubCategoryQuestionCountRequest }>());
export const getSubCategoryQuestionCountActionSuccess = createAction(GetSubCategoryQuestionCountActionTypes.OnGetSubCategoryQuestionCountSuccess, props<{
    responseData: ResponseData<GetSubCategoryQuestionCountModel>
}>());
export const getSubCategoryQuestionCountActionFailure = createAction(GetSubCategoryQuestionCountActionTypes.OnGetSubCategoryQuestionCountFailure, props<{ errors: any }>());
