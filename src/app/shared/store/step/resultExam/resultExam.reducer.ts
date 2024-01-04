import {createReducer, on} from "@ngrx/store";
import {resultExamState} from "./resultExam.state";
import {
  resultExamAction, resultExamActionFailure, resultExamActionSuccess, resultExamClearDataAction
} from "./resultExam.action";

const _resultExamReducer = createReducer(
    resultExamState,
    on(resultExamAction, (state, action) => {
        return {
            ...state
        }
    }),
    on(resultExamClearDataAction, (state) => {
      return {
        ...state,
        data: null
      }
    }),
    on(resultExamActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(resultExamActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function resultExamReducer(state: any, action: any) {
    return _resultExamReducer(state, action);
}
