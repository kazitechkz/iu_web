import {createReducer, on} from "@ngrx/store";
import {subStepExamState} from "./subStepExam.state";
import {
  subStepExamAction, subStepExamActionFailure, subStepExamActionSuccess,
} from "./subStepExam.action";


const _subStepExamReducer = createReducer(
    subStepExamState,
    on(subStepExamAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(subStepExamActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(subStepExamActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function subStepExamReducer(state: any, action: any) {
    return _subStepExamReducer(state, action);
}
