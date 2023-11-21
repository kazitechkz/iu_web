import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateAttemptSettingsUNTActionTypes} from "./createAttemptSettingsUNT.action.types";
import {CreateAttemptSettingsUNTRequest, CreateAttemptSettingsUNTRequestData} from "./createAttemptSettingsUNT.request";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

export const createAttemptSettingsUNTAction = createAction(CreateAttemptSettingsUNTActionTypes.OnCreateAttemptSettingsUNT,props<{requestData: CreateAttemptSettingsUNTRequestData}>());
export const createAttemptSettingsUNTActionSuccess = createAction(CreateAttemptSettingsUNTActionTypes.OnCreateAttemptSettingsUNTSuccess, props<{
  responseData: ResponseData<AttemptSettingUNT>
}>());
export const createAttemptSettingsUNTActionFailure = createAction(CreateAttemptSettingsUNTActionTypes.OnCreateAttemptSettingsUNTFailure, props<{ errors: any }>());
