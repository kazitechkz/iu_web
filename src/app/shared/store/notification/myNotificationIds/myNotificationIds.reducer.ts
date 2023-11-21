import {createReducer, on} from "@ngrx/store";
import {myNotificationIdsState} from "./myNotificationIds.state";
import {
  myNotificationIdsAction,
  MyNotificationIdsActionFailure,
  MyNotificationIdsActionSuccess
} from "./myNotificationIds.action";

const _MyNotificationIdsReducer = createReducer(
  myNotificationIdsState,
  on(myNotificationIdsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(MyNotificationIdsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(MyNotificationIdsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function myNotificationIdsReducer(state: any, action: any) {
  return _MyNotificationIdsReducer(state, action);
}
