import {createReducer, on} from "@ngrx/store";
import {myOrderState} from "./myOrder.state";
import {
  myOrderAction, MyOrderActionSuccess, MyOrderActionFailure,
} from "./myOrder.action";

const _myOrderReducer = createReducer(
  myOrderState,
  on(myOrderAction, (state, action) => {
    return {
      ...state
    }
  }),
  on(MyOrderActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(MyOrderActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function myOrderReducer(state: any, action: any) {
  return _myOrderReducer(state, action);
}
