import {createReducer, on} from "@ngrx/store";
import {
  createAttemptSettingsAction, createAttemptSettingsActionFailure,
  createAttemptSettingsActionSuccess,
} from "./createAttemptSettings.action";
import {createAttemptSettingsState} from "./createAttemptSettings.state";

const _createAttemptSettingsReducer = createReducer(
  createAttemptSettingsState,
  on(createAttemptSettingsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createAttemptSettingsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createAttemptSettingsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createAttemptSettingsReducer(state: any, action: any) {
  return _createAttemptSettingsReducer(state, action);

}
