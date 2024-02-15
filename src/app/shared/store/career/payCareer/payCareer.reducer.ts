import {createReducer, on} from "@ngrx/store";
import {payCareerState} from "./payCareer.state";
import {
  payCareerAction,
  payCareerActionSuccess,
  payCareerActionFailure,
} from "./payCareer.action";

const _payCareerReducer = createReducer(
  payCareerState,
  on(payCareerAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(payCareerActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(payCareerActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function payCareerReducer(state: any, action: any) {
  return _payCareerReducer(state, action);
}
