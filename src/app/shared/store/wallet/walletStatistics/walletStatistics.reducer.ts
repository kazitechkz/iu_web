import {createReducer, on} from "@ngrx/store";
import {
  walletStatisticsAction,
  walletStatisticsActionSuccess,
  walletStatisticsActionFailure,
} from "./walletStatistics.action";
import {walletStatisticsState} from "./walletStatistics.state";


const _walletStatisticsReducer = createReducer(
  walletStatisticsState,
  on(walletStatisticsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(walletStatisticsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(walletStatisticsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function walletStatisticsReducer(state: any, action: any) {
  return _walletStatisticsReducer(state, action);
}
