import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAllAttemptSettingsActionTypes} from "./getAllAttemptSettings.action.types";
import {Pagination} from "../../pagination";
import {AttemptSetting} from "../../../models/attemptSetting.model";
import {AllAttemptRequest} from "../../attempt/allAttempt/allAttempt.request";

export const getAllAttemptSettingsAction = createAction(GetAllAttemptSettingsActionTypes.OnGetAllAttemptSettings,props<{requestData:AllAttemptRequest}>());
export const getAllAttemptSettingsActionSuccess = createAction(GetAllAttemptSettingsActionTypes.OnGetAllAttemptSettingsSuccess, props<{
  responseData: ResponseData<Pagination<AttemptSetting[]>>
}>());
export const getAllAttemptSettingsActionFailure = createAction(GetAllAttemptSettingsActionTypes.OnGetAllAttemptSettingsFailure, props<{ errors: any }>());
