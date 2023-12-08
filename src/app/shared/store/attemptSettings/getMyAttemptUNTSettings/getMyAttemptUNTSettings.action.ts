import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMyAttemptUNTSettingsActionTypes} from "./getMyAttemptUNTSettings.action.types";
import {GetMyAttemptUNTSettingsRequest} from "./getMyAttemptUNTSettings.request";
import {Pagination} from "../../pagination";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

export const getMyAttemptUNTSettingsAction = createAction(GetMyAttemptUNTSettingsActionTypes.OnGetMyAttemptUNTSettings, props<{requestData: GetMyAttemptUNTSettingsRequest}>());
export const getMyAttemptUNTSettingsActionSuccess = createAction(GetMyAttemptUNTSettingsActionTypes.OnGetMyAttemptUNTSettingsSuccess, props<{
  responseData: ResponseData<Pagination<AttemptSettingUNT[]>>
}>());
export const getMyAttemptUNTSettingsActionFailure = createAction(GetMyAttemptUNTSettingsActionTypes.OnGetMyAttemptUNTSettingsFailure, props<{ errors: any }>());
