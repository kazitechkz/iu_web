import {createReducer, on} from "@ngrx/store";
import {getAllTournamentState} from "./getAllTournament.state";
import {
  getAllTournamentAction,
  getAllTournamentActionFailure,
  getAllTournamentActionSuccess
} from "./getAllTournament.action";

const _getAllTournamentReducer = createReducer(
  getAllTournamentState,
  on(getAllTournamentAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getAllTournamentActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getAllTournamentActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getAllTournamentReducer(state: any, action: any) {
  return _getAllTournamentReducer(state, action);
}
