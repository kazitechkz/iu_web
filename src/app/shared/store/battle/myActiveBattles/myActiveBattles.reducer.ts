import {createReducer, on} from "@ngrx/store";
import {myActiveBattlesState} from "./myActiveBattles.state";
import {
  myActiveBattlesAction,
  myActiveBattlesActionSuccess,
  myActiveBattlesActionFailure,
} from "./myActiveBattles.action";

const _myActiveBattlesReducer = createReducer(
    myActiveBattlesState,
  on(myActiveBattlesAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(myActiveBattlesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(myActiveBattlesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function myActiveBattlesReducer(state: any, action: any) {
  return _myActiveBattlesReducer(state, action);
}
