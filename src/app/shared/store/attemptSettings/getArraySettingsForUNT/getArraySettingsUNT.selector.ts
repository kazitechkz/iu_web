import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_array_settings_unt_state = createFeatureSelector<ResponseData<Record<any, any>[]>>('getArraySettingsUNT');

export const getArraySettingsUNTSelector = createSelector(get_array_settings_unt_state, (state) => {
  return state;
})
