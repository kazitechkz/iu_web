import {createReducer, on} from "@ngrx/store";
import {saveQuestionState} from "./saveQuestion.state";
import {onSaveQuestionAction, onSaveQuestionActionFailure, onSaveQuestionActionSuccess} from "./saveQuestion.action";


const _saveQuestionReducer = createReducer(
  saveQuestionState,
  on(onSaveQuestionAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(onSaveQuestionActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(onSaveQuestionActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function saveQuestionReducer(state: any, action: any) {
  return _saveQuestionReducer(state, action);

}
