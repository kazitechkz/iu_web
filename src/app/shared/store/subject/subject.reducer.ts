import {createReducer, on} from "@ngrx/store";
import {subjectAllState, subjectsWithoutRequiredAllState} from "./subject.state";
import {
  subjectGetAction,
  subjectGetActionFailure,
  subjectGetActionSuccess,
  subjectsWithoutRequiredGetAction, subjectsWithoutRequiredGetActionFailure, subjectsWithoutRequiredGetActionSuccess
} from "./subject.action";

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

const _subjectsWithoutRequiredReducer = createReducer(
  subjectsWithoutRequiredAllState,
  on(subjectsWithoutRequiredGetAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subjectsWithoutRequiredGetActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(subjectsWithoutRequiredGetActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function subjectsWithoutRequiredReducer(state: any, action: any) {
  return _subjectsWithoutRequiredReducer(state, action);
}
