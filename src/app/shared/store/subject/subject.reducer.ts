import {createReducer, on} from "@ngrx/store";
import {accountState} from "../user/account/account.state";
import {accountAction, accountActionFailure, accountActionSuccess} from "../user/account/account.action";
import {subjectAllState} from "./subject.state";
import {subjectGetAction, subjectGetActionFailure, subjectGetActionSuccess} from "./subject.action";

const _subjectReducer = createReducer(
  subjectAllState,
  on(subjectGetAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subjectGetActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(subjectGetActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function subjectReducer(state: any, action: any) {
  return _subjectReducer(state, action);
}
