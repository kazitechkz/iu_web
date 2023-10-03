import {createReducer, on} from "@ngrx/store";
import {answerState} from "./answer.state";
import {createAnswerAction, createAnswerActionFailure, createAnswerActionSuccess} from "./answer.action";

const _answerReducer = createReducer(
  answerState,
  on(createAnswerAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(createAnswerActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createAnswerActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function answerReducer(state: any, action: any) {
  return _answerReducer(state, action);

}
