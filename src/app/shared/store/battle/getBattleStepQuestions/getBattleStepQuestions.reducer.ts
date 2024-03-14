import {createReducer, on} from "@ngrx/store";
import {getBattleStepQuestionsState} from "./getBattleStepQuestions.state";
import {
  getBattleStepQuestionsAction,
  getBattleStepQuestionsActionFailure,
  getBattleStepQuestionsActionSuccess
} from "./getBattleStepQuestions.action";


const _getBattleStepQuestionsReducer = createReducer(
  getBattleStepQuestionsState,
  on(getBattleStepQuestionsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getBattleStepQuestionsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getBattleStepQuestionsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getBattleStepQuestionsReducer(state: any, action: any) {
  return _getBattleStepQuestionsReducer(state, action);
}
