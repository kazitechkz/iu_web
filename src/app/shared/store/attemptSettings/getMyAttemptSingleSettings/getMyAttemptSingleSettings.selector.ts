import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {AttemptSettingStudentModel} from "../../../models/attemptSettingStudent.model";

const get_my_attempt_single_settings_state = createFeatureSelector<ResponseData<Pagination<AttemptSettingStudentModel[]>>>('getMySingleSettings');

export const getMyAttemptSingleSettingsSelector = createSelector(get_my_attempt_single_settings_state, (state) => {
  return state;
})
