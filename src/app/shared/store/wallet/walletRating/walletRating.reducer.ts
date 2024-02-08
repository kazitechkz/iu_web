import {createReducer, on} from "@ngrx/store";
import {
  walletRatingAction,
  walletRatingActionSuccess,
  walletRatingActionFailure,
} from "./walletRating.action";
import {walletRatingState} from "./walletRating.state";


const _walletRatingReducer = createReducer(
  walletRatingState,
  on(walletRatingAction, (state, action) => {
    return {
      ...state
    }
  }),
  on(walletRatingActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(walletRatingActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function walletRatingReducer(state: any, action: any) {
  return _walletRatingReducer(state, action);
}
