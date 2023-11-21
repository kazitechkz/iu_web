import {createReducer, on} from "@ngrx/store";
import {getArraySettingsUNTState} from "./getArraySettingsUNT.state";
import {
  getArraySettingsUNTAction, getArraySettingsUNTActionSuccess, getArraySettingsUNTActionFailure
} from "./getArraySettingsUNT.action";

const _getArraySettingsUNTReducer = createReducer(
  getArraySettingsUNTState,
  on(getArraySettingsUNTAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getArraySettingsUNTActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getArraySettingsUNTActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getArraySettingsUNTReducer(state: any, action: any) {
  return _getArraySettingsUNTReducer(state, action);
}
