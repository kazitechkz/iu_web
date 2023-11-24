import {createReducer, on} from "@ngrx/store";
import {getDetailExamByIdState, getDetailUNTByIdState} from "./detail-exam.state";
import {
  GetDetailExamByIdAction,
  GetDetailExamByIdFailure,
  GetDetailExamByIdSuccess,
  GetDetailUNTByIdAction, GetDetailUNTByIdFailure, GetDetailUNTByIdSuccess
} from "./detail-exam.action";

const _getDetailExamByIdReducer = createReducer(
    getDetailExamByIdState,
    on(GetDetailExamByIdAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(GetDetailExamByIdSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(GetDetailExamByIdFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function getDetailExamByIdReducer(state: any, action: any) {
    return _getDetailExamByIdReducer(state, action);
}

const _getDetailUNTByIdReducer = createReducer(
    getDetailUNTByIdState,
    on(GetDetailUNTByIdAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(GetDetailUNTByIdSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(GetDetailUNTByIdFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function getDetailUNTByIdReducer(state: any, action: any) {
    return _getDetailUNTByIdReducer(state, action);
}

