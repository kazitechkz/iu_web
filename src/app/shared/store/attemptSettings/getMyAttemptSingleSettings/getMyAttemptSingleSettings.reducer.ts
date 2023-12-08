import {createReducer, on} from "@ngrx/store";
import {getMyAttemptSingleSettingsState} from "./getMyAttemptSingleSettings.state";
import {
  getMyAttemptSingleSettingsAction, getMyAttemptSingleSettingsActionFailure,
  getMyAttemptSingleSettingsActionSuccess
} from "./getMyAttemptSingleSettings.action";


const _getMyAttemptSingleSettingsReducer = createReducer(
  getMyAttemptSingleSettingsState,
  on(getMyAttemptSingleSettingsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getMyAttemptSingleSettingsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getMyAttemptSingleSettingsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getMyAttemptSingleSettingsReducer(state: any, action: any) {
  return _getMyAttemptSingleSettingsReducer(state, action);
}
