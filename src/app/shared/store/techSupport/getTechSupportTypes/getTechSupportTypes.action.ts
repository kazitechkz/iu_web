import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetTechSupportTypesActionTypes} from "./getTechSupportTypes.action.types";
import {TechSupportType} from "../../../models/techSupportType.model";

export const getTechSupportTypesAction = createAction(GetTechSupportTypesActionTypes.OnGetTechSupportTypes);
export const getTechSupportTypesActionSuccess = createAction(GetTechSupportTypesActionTypes.OnGetTechSupportTypesSuccess, props<{
  responseData: ResponseData<TechSupportType[]>
}>());
export const getTechSupportTypesActionFailure = createAction(GetTechSupportTypesActionTypes.OnGetTechSupportTypesFailure, props<{ errors: any }>());
