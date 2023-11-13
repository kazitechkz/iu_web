import {createReducer, on} from "@ngrx/store";
import {getAllAttemptSettingsState} from "./getAllAttemptSettings.state";
import {
  getAllAttemptSettingsAction,
  getAllAttemptSettingsActionFailure,
  getAllAttemptSettingsActionSuccess
} from "./getAllAttemptSettings.action";

const _getAllAttemptSettingsReducer = createReducer(
  getAllAttemptSettingsState,
  on(getAllAttemptSettingsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getAllAttemptSettingsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getAllAttemptSettingsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getAllAttemptSettingsReducer(state: any, action: any) {
  return _getAllAttemptSettingsReducer(state, action);
}
