import {createReducer, on} from "@ngrx/store";
import {subStepExamState} from "./subStepExam.state";
import {
  passSubStepExamAction, passSubStepExamActionFailure, passSubStepExamActionSuccess,
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


const _passSubStepExamReducer = createReducer(
    subStepExamState,
    on(passSubStepExamAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(passSubStepExamActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(passSubStepExamActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function passSubStepExamReducer(state: any, action: any) {
    return _passSubStepExamReducer(state, action);
}
