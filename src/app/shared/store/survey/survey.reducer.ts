import {createReducer, on} from "@ngrx/store";
import {surveyAllState, surveyAnswerState} from "./survey.state";
import {
  surveyAnswerAction,
  surveyAnswerActionFailure, surveyAnswerActionSuccess,
  surveyGetAction,
  surveyGetActionFailure,
  surveyGetActionSuccess,
} from "./survey.action";

const _surveyReducer = createReducer(
  surveyAllState,
  on(surveyGetAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(surveyGetActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(surveyGetActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function surveyReducer(state: any, action: any) {
  return _surveyReducer(state, action);
}

const _surveyAnswerReducer = createReducer(
  surveyAnswerState,
  on(surveyAnswerAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(surveyAnswerActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(surveyAnswerActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function surveyAnswerReducer(state: any, action: any) {
  return _surveyAnswerReducer(state, action);
}
