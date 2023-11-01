import {createReducer, on} from "@ngrx/store";
import {getSubTournamentResultsState} from "./getSubTournamentResults.state";
import {
  getSubTournamentResultsAction,
  getSubTournamentResultsActionFailure, getSubTournamentResultsActionSuccess
} from "./getSubTournamentResults.action";


const _getSubTournamentResultsReducer = createReducer(
  getSubTournamentResultsState,
  on(getSubTournamentResultsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getSubTournamentResultsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getSubTournamentResultsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getSubTournamentResultsReducer(state: any, action: any) {
  return _getSubTournamentResultsReducer(state, action);
}
