import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetArraySettingsUNTActionTypes} from "./getArraySettingsUNT.action.types";
import {Pagination} from "../../pagination";
import {AttemptSetting} from "../../../models/attemptSetting.model";
import {AllAttemptRequest} from "../../attempt/allAttempt/allAttempt.request";
import {GetArraySettingsUNT} from "./getArraySettingsUNT.request";

export const getArraySettingsUNTAction = createAction(GetArraySettingsUNTActionTypes.OnGetArraySettingsUNT, props<{requestData: GetArraySettingsUNT}>());
export const getArraySettingsUNTActionSuccess = createAction(GetArraySettingsUNTActionTypes.OnGetArraySettingsUNTSuccess, props<{
  responseData: ResponseData<Record<any, any>[]>
}>());
export const getArraySettingsUNTActionFailure = createAction(GetArraySettingsUNTActionTypes.OnGetArraySettingsUNTFailure, props<{ errors: any }>());
