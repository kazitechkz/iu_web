import {createReducer, on} from "@ngrx/store";
import {getListOfTournamentsState} from "./getListOfTournaments.state";
import {
  getListOfTournamentsAction,
  getListOfTournamentsActionFailure,
  getListOfTournamentsActionSuccess
} from "./getListOfTournaments.action";


const _getListOfTournamentsReducer = createReducer(
  getListOfTournamentsState,
  on(getListOfTournamentsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getListOfTournamentsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getListOfTournamentsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getListOfTournamentsReducer(state: any, action: any) {
  return _getListOfTournamentsReducer(state, action);
}
