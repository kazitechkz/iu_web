import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {AttemptSetting} from "../../../models/attemptSetting.model";

const get_all_attempt_settings_state = createFeatureSelector<ResponseData<Pagination<AttemptSetting[]>>>('getAllAttemptSettings');

export const getAllAttemptSettingsSelector = createSelector(get_all_attempt_settings_state, (state) => {
  return state;
})
