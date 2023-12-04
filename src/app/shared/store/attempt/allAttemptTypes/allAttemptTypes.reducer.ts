import {createReducer, on} from "@ngrx/store";
import {allAttemptTypesState} from "./allAttemptTypes.state";
import {
  allAttemptTypesAction,
  allAttemptTypesActionFailure,
  allAttemptTypesActionSuccess
} from "./allAttemptTypes.action";

const _allAttemptTypesReducer = createReducer(
  allAttemptTypesState,
  on(allAttemptTypesAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(allAttemptTypesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(allAttemptTypesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function allAttemptTypesReducer(state: any, action: any) {
  return _allAttemptTypesReducer(state, action);

}
