import {createReducer, on} from "@ngrx/store";
import {finishBattleResultState} from "./finishBattleResult.state";
import {
  finishBattleResultAction,
  finishBattleResultActionSuccess,
  finishBattleResultActionFailure,
} from "./finishBattleResult.action";

const _finishBattleResultReducer = createReducer(
  finishBattleResultState,
  on(finishBattleResultAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(finishBattleResultActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(finishBattleResultActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function finishBattleResultReducer(state: any, action: any) {
  return _finishBattleResultReducer(state, action);
}
