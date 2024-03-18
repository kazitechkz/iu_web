import {createReducer, on} from "@ngrx/store";
import {getBattleHistoryState} from "./getBattleHistory.state";
import {getBattleHistoryAction, getBattleHistoryActionFailure, getBattleHistoryActionSuccess} from "./getBattleHistory.action";


const _getBattleHistoryReducer = createReducer(
  getBattleHistoryState,
  on(getBattleHistoryAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getBattleHistoryActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getBattleHistoryActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getBattleHistoryReducer(state: any, action: any) {
  return _getBattleHistoryReducer(state, action);
}
