import {createReducer, on} from "@ngrx/store";
import {participateTournamentState, payTournamentState} from "./participateTournament.state";
import {
  OnParticipateTournamentAction,
  OnParticipateTournamentActionFailure,
  OnParticipateTournamentActionSuccess,
  OnPayTournamentAction,
  OnPayTournamentActionFailure,
  OnPayTournamentActionSuccess
} from "./participateTournament.action";


const _participantTournamentReducer = createReducer(
  participateTournamentState,
  on(OnParticipateTournamentAction, (state, action) => {
    return {
      ...state,
      data:null,
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

const _payTournamentReducer = createReducer(
  payTournamentState,
  on(OnPayTournamentAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(OnPayTournamentActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(OnPayTournamentActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function payTournamentReducer(state: any, action: any) {
  return _payTournamentReducer(state, action);
}
