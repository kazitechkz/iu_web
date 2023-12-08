import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMyAttemptSingleSettingsActionTypes} from "./getMyAttemptSingleSettings.action.types";

import {GetMyAttemptSingleSettingsRequest} from "./getMyAttemptSingleSettings.request";
import {Pagination} from "../../pagination";
import {AttemptSettingStudentModel} from "../../../models/attemptSettingStudent.model";

export const getMyAttemptSingleSettingsAction = createAction(GetMyAttemptSingleSettingsActionTypes.OnGetMyAttemptSingleSettings, props<{requestData: GetMyAttemptSingleSettingsRequest}>());
export const getMyAttemptSingleSettingsActionSuccess = createAction(GetMyAttemptSingleSettingsActionTypes.OnGetMyAttemptSingleSettingsSuccess, props<{
  responseData: ResponseData<Pagination<AttemptSettingStudentModel[]>>
}>());
export const getMyAttemptSingleSettingsActionFailure = createAction(GetMyAttemptSingleSettingsActionTypes.OnGetMyAttemptSingleSettingsFailure, props<{ errors: any }>());
