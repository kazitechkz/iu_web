import {createReducer, on} from "@ngrx/store";
import {
  getTournamentDetailAction,
  getTournamentDetailActionFailure,
  getTournamentDetailActionSuccess
} from "./getTournamentDetail.action";
import {getAllTournamentState} from "../getAllTournament/getAllTournament.state";


const _getTournamentDetailReducer = createReducer(
  getAllTournamentState,
  on(getTournamentDetailAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getTournamentDetailActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getTournamentDetailActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getTournamentDetailReducer(state: any, action: any) {
  return _getTournamentDetailReducer(state, action);
}
