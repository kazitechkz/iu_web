import {createReducer, on} from "@ngrx/store";
import {participateTournamentState} from "./participateTournament.state";
import {
  OnParticipateTournamentAction,
  OnParticipateTournamentActionFailure,
  OnParticipateTournamentActionSuccess
} from "./participateTournament.action";


const _participantTournamentReducer = createReducer(
  participateTournamentState,
  on(OnParticipateTournamentAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(OnParticipateTournamentActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(OnParticipateTournamentActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function participantTournamentReducer(state: any, action: any) {
  return _participantTournamentReducer(state, action);
}
