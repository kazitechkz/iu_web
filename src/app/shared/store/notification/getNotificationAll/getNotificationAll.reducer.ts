import {createReducer, on} from "@ngrx/store";
import {getNotificationAllState} from "./getNotificationAll.state";
import {
  getNotificationAllAction,
  getNotificationAllActionFailure,
  getNotificationAllActionSuccess
} from "./getNotificationAll.action";

const _getNotificationAllReducer = createReducer(
  getNotificationAllState,
  on(getNotificationAllAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getNotificationAllActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getNotificationAllActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getNotificationAllReducer(state: any, action: any) {
  return _getNotificationAllReducer(state, action);
}
