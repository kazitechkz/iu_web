import {createReducer, on} from "@ngrx/store";
import {createTournamentAttemptState} from "./createTournamentAttempt.state";
import {
  createTournamentAttemptAction, createTournamentAttemptActionFailure,
  createTournamentAttemptActionSuccess,
} from "./createTournamentAttempt.action";

const _createTournamentAttemptReducer = createReducer(
  createTournamentAttemptState,
  on(createTournamentAttemptAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(createTournamentAttemptActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createTournamentAttemptActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createTournamentAttemptReducer(state: any, action: any) {
  return _createTournamentAttemptReducer(state, action);

}
