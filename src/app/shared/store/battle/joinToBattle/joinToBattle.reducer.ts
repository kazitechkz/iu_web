import {createReducer, on} from "@ngrx/store";
import {joinToBattleState} from "./joinToBattle.state";
import {
  joinToBattleAction,
  joinToBattleActionSuccess,
  joinToBattleActionFailure,

} from "./joinToBattle.action";

const _joinToBattleReducer = createReducer(
  joinToBattleState,
  on(joinToBattleAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(joinToBattleActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(joinToBattleActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function joinToBattleReducer(state: any, action: any) {
  return _joinToBattleReducer(state, action);
}
