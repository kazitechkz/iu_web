import {createReducer, on} from "@ngrx/store";
import {getAllAttemptSettingsUNTState} from "./getAllAttemptSettingsUNT.state";
import {
  getAllAttemptSettingsUNTActionSuccess,
  getAllAttemptSettingsUNTActionFailure,
  getAllAttemptSettingsUNTAction
} from "./getAllAttemptSettingsUNT.action";

const _getAllAttemptSettingsReducer = createReducer(
  getAllAttemptSettingsUNTState,
  on(getAllAttemptSettingsUNTAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getAllAttemptSettingsUNTActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getAllAttemptSettingsUNTActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getAllAttemptSettingsUNTReducer(state: any, action: any) {
  return _getAllAttemptSettingsReducer(state, action);
}
