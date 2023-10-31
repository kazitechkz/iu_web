import {createReducer, on} from "@ngrx/store";
import {getSubTournamentRivalsState} from "./getSubTournamentRivals.state";
import {
  getSubTournamentRivalsAction,
  getSubTournamentRivalsActionFailure, getSubTournamentRivalsActionSuccess
} from "./getSubTournamentRivals.action";


const _getSubTournamentRivalsReducer = createReducer(
  getSubTournamentRivalsState,
  on(getSubTournamentRivalsAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(getSubTournamentRivalsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getSubTournamentRivalsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getSubTournamentRivalsReducer(state: any, action: any) {
  return _getSubTournamentRivalsReducer(state, action);
}
