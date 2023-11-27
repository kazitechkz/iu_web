import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetTechSupportCategoriesActionTypes} from "./getTechSupportCategories.action.types";
import {TechSupportCategory} from "../../../models/techSupportCategory.model";

export const getTechSupportCategoriesAction = createAction(GetTechSupportCategoriesActionTypes.OnGetTechSupportCategories);
export const getTechSupportCategoriesActionSuccess = createAction(GetTechSupportCategoriesActionTypes.OnGetTechSupportCategoriesSuccess, props<{
  responseData: ResponseData<TechSupportCategory[]>
}>());
export const getTechSupportCategoriesActionFailure = createAction(GetTechSupportCategoriesActionTypes.OnGetTechSupportCategoriesFailure, props<{ errors: any }>());
