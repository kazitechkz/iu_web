import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

const get_all_attempt_settings_unt_state = createFeatureSelector<ResponseData<Pagination<AttemptSettingUNT[]>>>('getAllAttemptSettingsUNT');

export const getAllAttemptSettingsUNTSelector = createSelector(get_all_attempt_settings_unt_state, (state) => {
  return state;
})
