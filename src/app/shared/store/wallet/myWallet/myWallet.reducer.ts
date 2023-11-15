import {createReducer, on} from "@ngrx/store";
import {
  myWalletAction,
  myWalletActionSuccess,
  myWalletActionFailure,

} from "./myWallet.action";
import {myWalletState} from "./myWallet.state";


const _myWalletReducer = createReducer(
  myWalletState,
  on(myWalletAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(myWalletActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(myWalletActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function myWalletReducer(state: any, action: any) {
  return _myWalletReducer(state, action);
}
