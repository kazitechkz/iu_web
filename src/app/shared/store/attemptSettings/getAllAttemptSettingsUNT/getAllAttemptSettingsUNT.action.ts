import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAllAttemptSettingsUNTActionTypes} from "./getAllAttemptSettingsUNT.action.types";
import {Pagination} from "../../pagination";
import {AllAttemptRequest} from "../../attempt/allAttempt/allAttempt.request";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

export const getAllAttemptSettingsUNTAction = createAction(GetAllAttemptSettingsUNTActionTypes.OnGetAllAttemptSettingsUNT,props<{requestData:AllAttemptRequest}>());
export const getAllAttemptSettingsUNTActionSuccess = createAction(GetAllAttemptSettingsUNTActionTypes.OnGetAllAttemptSettingsUNTSuccess, props<{
  responseData: ResponseData<Pagination<AttemptSettingUNT[]>>
}>());
export const getAllAttemptSettingsUNTActionFailure = createAction(GetAllAttemptSettingsUNTActionTypes.OnGetAllAttemptSettingsUNTFailure, props<{ errors: any }>());
