import {createReducer, on} from "@ngrx/store";
import {getDetailExamByIdState} from "./detail-exam.state";
import {GetDetailExamByIdAction, GetDetailExamByIdFailure, GetDetailExamByIdSuccess} from "./detail-exam.action";

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

