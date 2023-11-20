import {createReducer, on} from "@ngrx/store";
import {
  createAttemptSettingsUNTAction, createAttemptSettingsUNTActionFailure,
  createAttemptSettingsUNTActionSuccess,
} from "./createAttemptSettingsUNT.action";
import {createAttemptSettingsUNTState} from "./createAttemptSettingsUNT.state";

const _createAttemptSettingsUNTReducer = createReducer(
  createAttemptSettingsUNTState,
  on(createAttemptSettingsUNTAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createAttemptSettingsUNTActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createAttemptSettingsUNTActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createAttemptSettingsUNTReducer(state: any, action: any) {
  return _createAttemptSettingsUNTReducer(state, action);

}
