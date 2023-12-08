import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

const get_my_attempt_UNT_settings_state = createFeatureSelector<ResponseData<Pagination<AttemptSettingUNT[]>>>('getMyUNTSettings');

export const getMyAttemptUNTSettingsSelector = createSelector(get_my_attempt_UNT_settings_state, (state) => {
  return state;
})
