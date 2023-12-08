import {createReducer, on} from "@ngrx/store";
import {getMyAttemptUNTSettingsState} from "./getMyAttemptUNTSettings.state";
import {
  getMyAttemptUNTSettingsAction, getMyAttemptUNTSettingsActionFailure,
  getMyAttemptUNTSettingsActionSuccess
} from "./getMyAttemptUNTSettings.action";


const _getMyAttemptUNTSettingsReducer = createReducer(
  getMyAttemptUNTSettingsState,
  on(getMyAttemptUNTSettingsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getMyAttemptUNTSettingsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getMyAttemptUNTSettingsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getMyAttemptUNTSettingsReducer(state: any, action: any) {
  return _getMyAttemptUNTSettingsReducer(state, action);
}
