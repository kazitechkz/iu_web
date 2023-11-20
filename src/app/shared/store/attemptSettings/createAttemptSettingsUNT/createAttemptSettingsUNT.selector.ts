import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";
import {AttemptSetting} from "../../../models/attemptSetting.model";
import {AttemptSettingUNT} from "../../../models/attemptSettingUNT.model";

const create_attempt_settings_unt_selector = createFeatureSelector<ResponseData<AttemptSettingUNT>>('createAttemptSettingsUNT');

export const createAttemptSettingsUNTSelector = createSelector(create_attempt_settings_unt_selector, (state) => {
  return state;
})
