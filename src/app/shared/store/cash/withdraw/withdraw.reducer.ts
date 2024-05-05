import {createReducer, on} from "@ngrx/store";
import {
  requestWithdrawAction, requestWithdrawActionFailure, requestWithdrawActionSuccess,
  withdrawAction, withdrawActionFailure, withdrawActionSuccess
} from "./withdraw.action";
import {requestWithdrawState, withdrawState} from "./withdraw.state";


const _WithdrawRatingReducer = createReducer(
  withdrawState,
  on(withdrawAction, (state, action) => {
    return {
      ...state
    }
  }),
  on(withdrawActionSuccess, (state, action) => {
    return {
      ...state,
      status: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(withdrawActionFailure, (state, action) => {
    return {
      ...state,
      status: false,
      errors: action.errors
    }
  })
);

export function withdrawReducer(state: any, action: any) {
  return _WithdrawRatingReducer(state, action);
}

const _requestWithdrawRatingReducer = createReducer(
  requestWithdrawState,
  on(requestWithdrawAction, (state, action) => {
    return {
      ...state,
      data: null
    }
  }),
  on(requestWithdrawActionSuccess, (state, action) => {
    return {
      ...state,
      status: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(requestWithdrawActionFailure, (state, action) => {
    return {
      ...state,
      status: false,
      errors: action.errors,
      data: null
    }
  })
);

export function requestWithdrawReducer(state: any, action: any) {
  return _requestWithdrawRatingReducer(state, action);
}
