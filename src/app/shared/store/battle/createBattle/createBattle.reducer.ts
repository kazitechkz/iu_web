import {createReducer, on} from "@ngrx/store";
import {createBattleState} from "./createBattle.state";
import {
  createBattleAction,
  createBattleActionSuccess,
  createBattleActionFailure,

} from "./createBattle.action";

const _createBattleReducer = createReducer(
  createBattleState,
  on(createBattleAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createBattleActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createBattleActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createBattleReducer(state: any, action: any) {
  return _createBattleReducer(state, action);
}
