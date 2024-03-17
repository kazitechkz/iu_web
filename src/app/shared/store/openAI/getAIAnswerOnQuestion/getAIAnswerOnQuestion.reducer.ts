import {createReducer, on} from "@ngrx/store";
import {getAIAnswerOnQuestionState} from "./getAIAnswerOnQuestion.state";
import {
  getAIAnswerOnQuestionAction,
  getAIAnswerOnQuestionActionFailure,
  getAIAnswerOnQuestionActionSuccess
} from "./getAIAnswerOnQuestion.action";


const _getAIAnswerOnQuestionReducer = createReducer(
  getAIAnswerOnQuestionState,
  on(getAIAnswerOnQuestionAction, (state, action) => {
    return {
      ...state,
      data:null,
      loading:true
    }
  }),
  on(getAIAnswerOnQuestionActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      loading:false,
      data: action.responseData.data
    }
  }),
  on(getAIAnswerOnQuestionActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      loading:false,
      errors: action.errors
    }
  })
);

export function getAIAnswerOnQuestionReducer(state: any, action: any) {
  return _getAIAnswerOnQuestionReducer(state, action);
}
