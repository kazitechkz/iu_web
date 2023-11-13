import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";
import {AttemptSetting} from "../../../models/attemptSetting.model";

const create_attempt_settings_selector = createFeatureSelector<ResponseData<AttemptSetting>>('createAttemptSettings');

export const createAttemptSettingsSelector = createSelector(create_attempt_settings_selector, (state) => {
  return state;
})
