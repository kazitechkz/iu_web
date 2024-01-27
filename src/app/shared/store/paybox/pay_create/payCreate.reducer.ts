import {createReducer, on} from "@ngrx/store";
import {payCreateState} from "./payCreate.state";
import {
  payCreateAction, payCreateActionSuccess, payCreateActionFailure,
} from "./payCreate.action";

const _payCreateReducer = createReducer(
  payCreateState,
  on(payCreateAction, (state, action) => {
    return {
      ...state
    }
  }),
  on(payCreateActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(payCreateActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function payCreateReducer(state: any, action: any) {
  return _payCreateReducer(state, action);
}
