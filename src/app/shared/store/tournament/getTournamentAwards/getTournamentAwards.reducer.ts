import {createReducer, on} from "@ngrx/store";
import {getTournamentAwardsState} from "./getTournamentAwards.state";
import {
  clearGetTournamentAwardsAction,
  getTournamentAwardsAction, getTournamentAwardsActionFailure,
  getTournamentAwardsActionSuccess
} from "./getTournamentAwards.action";


const _getTournamentAwardsReducer = createReducer(
  getTournamentAwardsState,
  on(getTournamentAwardsAction, (state, action) => {
    return {
      ...state
    }
  }),
  on(clearGetTournamentAwardsAction, (state, action) => {
    return {
      ...state,
      data:null
    }
  }),
  on(getTournamentAwardsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getTournamentAwardsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getTournamentAwardsReducer(state: any, action: any) {
  return _getTournamentAwardsReducer(state, action);
}
