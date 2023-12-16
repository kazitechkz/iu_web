import {createReducer, on} from "@ngrx/store";
import {answerBattleQuestionState} from "./answerBattleQuestion.state";
import {
  answerBattleQuestionAction,
  answerBattleQuestionActionSuccess,
  answerBattleQuestionActionFailure,

} from "./answerBattleQuestion.action";

const _answerBattleQuestionReducer = createReducer(
  answerBattleQuestionState,
  on(answerBattleQuestionAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(answerBattleQuestionActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(answerBattleQuestionActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function answerBattleQuestionReducer(state: any, action: any) {
  return _answerBattleQuestionReducer(state, action);
}
