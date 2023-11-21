import {createReducer, on} from "@ngrx/store";
import {checkNotificationState} from "./checkNotification.state";
import {
  checkNotificationAction,
  checkNotificationActionFailure,
  checkNotificationActionSuccess
} from "./checkNotification.action";

const _checkNotificationReducer = createReducer(
  checkNotificationState,
  on(checkNotificationAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(checkNotificationActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(checkNotificationActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function checkNotificationReducer(state: any, action: any) {
  return _checkNotificationReducer(state, action);
}
