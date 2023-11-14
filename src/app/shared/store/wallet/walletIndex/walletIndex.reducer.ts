import {createReducer, on} from "@ngrx/store";
import {
  walletIndexAction,
  walletIndexActionSuccess,
  walletIndexActionFailure,
} from "./walletIndex.action";
import {walletIndexState} from "./walletIndex.state";


const _walletIndexReducer = createReducer(
  walletIndexState,
  on(walletIndexAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(walletIndexActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(walletIndexActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function walletIndexReducer(state: any, action: any) {
  return _walletIndexReducer(state, action);
}
