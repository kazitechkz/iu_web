import {createReducer, on} from "@ngrx/store";
import {getActiveBattlesState} from "./getActiveBattles.state";
import {
  getActiveBattlesAction,
  getActiveBattlesActionSuccess,
  getActiveBattlesActionFailure,
} from "./getActiveBattles.action";

const _getActiveBattlesReducer = createReducer(
  getActiveBattlesState,
  on(getActiveBattlesAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getActiveBattlesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getActiveBattlesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getActiveBattlesReducer(state: any, action: any) {
  return _getActiveBattlesReducer(state, action);
}
