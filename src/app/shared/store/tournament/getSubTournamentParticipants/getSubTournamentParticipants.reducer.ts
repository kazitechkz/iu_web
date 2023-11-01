import {createReducer, on} from "@ngrx/store";
import {getSubTournamentParticipantsState} from "./getSubTournamentParticipants.state";
import {
  getSubTournamentParticipantsAction,
  getSubTournamentParticipantsActionFailure, getSubTournamentParticipantsActionSuccess
} from "./getSubTournamentParticipants.action";


const _getSubTournamentParticipantsReducer = createReducer(
  getSubTournamentParticipantsState,
  on(getSubTournamentParticipantsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getSubTournamentParticipantsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getSubTournamentParticipantsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getSubTournamentParticipantsReducer(state: any, action: any) {
  return _getSubTournamentParticipantsReducer(state, action);
}
