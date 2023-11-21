import {createReducer, on} from "@ngrx/store";
import {getNotificationTypeAllState} from "./getNotificationTypeAll.state";
import {
  getNotificationTypeAllAction,
  getNotificationTypeAllActionFailure,
  getNotificationTypeAllActionSuccess
} from "./getNotificationTypeAll.action";

const _getNotificationTypeAllReducer = createReducer(
  getNotificationTypeAllState,
  on(getNotificationTypeAllAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getNotificationTypeAllActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getNotificationTypeAllActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getNotificationTypeAllReducer(state: any, action: any) {
  return _getNotificationTypeAllReducer(state, action);
}
