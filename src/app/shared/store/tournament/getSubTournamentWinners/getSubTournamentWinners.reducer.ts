import {createReducer, on} from "@ngrx/store";
import {getSubTournamentWinnersState} from "./getSubTournamentWinners.state";
import {
  getSubTournamentWinnersAction,
  getSubTournamentWinnersActionFailure, getSubTournamentWinnersActionSuccess
} from "./getSubTournamentWinners.action";


const _getSubTournamentWinnersReducer = createReducer(
  getSubTournamentWinnersState,
  on(getSubTournamentWinnersAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(getSubTournamentWinnersActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getSubTournamentWinnersActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getSubTournamentWinnersReducer(state: any, action: any) {
  return _getSubTournamentWinnersReducer(state, action);
}
