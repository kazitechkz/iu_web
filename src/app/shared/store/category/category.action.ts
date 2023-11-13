import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {CategoryActionTypes} from "./category.action.types";
import {CategoryModel} from "../../models/category.model";

export const GetCategoriesAction = createAction(CategoryActionTypes.OnGetCategories, props<{subjectID: number}>());
export const GetCategoriesActionSuccess = createAction(CategoryActionTypes.OnGetCategoriesSuccess, props<{
  responseData: ResponseData<CategoryModel[]>
}>());
export const GetCategoriesActionFailure = createAction(CategoryActionTypes.OnGetCategoriesFailure, props<{ errors: any }>());
