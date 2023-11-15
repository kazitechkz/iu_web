import {createReducer, on} from "@ngrx/store";
import {
  myBalanceAction,
  myBalanceActionSuccess,
  myBalanceActionFailure,

} from "./myBalance.action";
import {myBalanceState} from "./myBalance.state";


const _myBalanceReducer = createReducer(
  myBalanceState,
  on(myBalanceAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(myBalanceActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(myBalanceActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function myBalanceReducer(state: any, action: any) {
  return _myBalanceReducer(state, action);
}
