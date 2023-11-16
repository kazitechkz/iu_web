import {createAction, props} from "@ngrx/store";
import {SubCategoryActionTypes} from "./subCategory.action.types";
import {ResponseData} from "../../response_data";
import {SubCategoryModel} from "../../../models/subCategory.model";

export const GetSubCategoriesAction = createAction(SubCategoryActionTypes.OnGetSubCategories, props<{categoryID: number, localeID?: number}>());
export const GetSubCategoriesActionSuccess = createAction(SubCategoryActionTypes.OnGetSubCategoriesSuccess, props<{
  responseData: ResponseData<SubCategoryModel[]>
}>());
export const GetSubCategoriesActionFailure = createAction(SubCategoryActionTypes.OnGetSubCategoriesFailure, props<{ errors: any }>());
