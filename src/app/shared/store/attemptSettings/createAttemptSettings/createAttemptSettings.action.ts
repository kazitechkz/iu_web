import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateAttemptSettingsActionTypes} from "./createAttemptSettings.action.types";
import {CreateAttemptSettingsRequest} from "./createAttemptSettings.request";
import {AttemptSetting} from "../../../models/attemptSetting.model";

export const createAttemptSettingsAction = createAction(CreateAttemptSettingsActionTypes.OnCreateAttemptSettings,props<{requestData:CreateAttemptSettingsRequest}>());
export const createAttemptSettingsActionSuccess = createAction(CreateAttemptSettingsActionTypes.OnCreateAttemptSettingsSuccess, props<{
  responseData: ResponseData<AttemptSetting>
}>());
export const createAttemptSettingsActionFailure = createAction(CreateAttemptSettingsActionTypes.OnCreateAttemptSettingsFailure, props<{ errors: any }>());
