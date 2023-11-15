import {createReducer, on} from "@ngrx/store";
import {
  walletTransferAction,
  walletTransferActionSuccess,
  walletTransferActionFailure,
} from "./walletTransfer.action";
import {walletTransferState} from "./walletTransfer.state";


const _walletTransferReducer = createReducer(
  walletTransferState,
  on(walletTransferAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(walletTransferActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(walletTransferActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function walletTransferReducer(state: any, action: any) {
  return _walletTransferReducer(state, action);
}
