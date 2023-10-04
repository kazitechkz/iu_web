import {createAction, props} from "@ngrx/store";
import {AppealTypesActionTypes} from "./appealTypes.action.types";
import {AppealType} from "../../../models/appealType.model";
import {ResponseData} from "../../response_data";

export const appealTypesAction = createAction(AppealTypesActionTypes.OnAppealType);
export const appealTypesActionSuccess = createAction(AppealTypesActionTypes.OnAppealTypeSuccess, props<{
  responseData: ResponseData<AppealType[]>
}>());
export const appealTypesActionFailure = createAction(AppealTypesActionTypes.OnAppealTypeFailure, props<{ errors: any }>());
