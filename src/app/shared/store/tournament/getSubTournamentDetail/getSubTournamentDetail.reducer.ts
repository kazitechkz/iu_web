import {createReducer, on} from "@ngrx/store";
import {
  getSubTournamentDetailAction, getSubTournamentDetailActionFailure, getSubTournamentDetailActionSuccess,
} from "./getSubTournamentDetail.action";
import {getSubTournamentDetailState} from "./getSubTournamentDetail.state";


const _getSubTournamentDetailReducer = createReducer(
  getSubTournamentDetailState,
  on(getSubTournamentDetailAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getSubTournamentDetailActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getSubTournamentDetailActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getSubTournamentDetailReducer(state: any, action: any) {
  return _getSubTournamentDetailReducer(state, action);
}
