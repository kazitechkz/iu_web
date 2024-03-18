import {createReducer, on} from "@ngrx/store";
import {getBattleStatsState} from "./getBattleStats.state";
import {getBattleStatsAction, getBattleStatsActionFailure, getBattleStatsActionSuccess} from "./getBattleStats.action";


const _getBattleStatsReducer = createReducer(
  getBattleStatsState,
  on(getBattleStatsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getBattleStatsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getBattleStatsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getBattleStatsReducer(state: any, action: any) {
  return _getBattleStatsReducer(state, action);
}
