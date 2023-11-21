import {createReducer, on} from "@ngrx/store";
import {getUnreadMessageCountState} from "./getUnreadMessageCount.state";
import {
  getUnreadMessageCountAction,
  getUnreadMessageCountActionFailure,
  getUnreadMessageCountActionSuccess
} from "./getUnreadMessageCount.action";

const _getUnreadMessageCountReducer = createReducer(
  getUnreadMessageCountState,
  on(getUnreadMessageCountAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getUnreadMessageCountActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getUnreadMessageCountActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getUnreadMessageCountReducer(state: any, action: any) {
  return _getUnreadMessageCountReducer(state, action);
}
