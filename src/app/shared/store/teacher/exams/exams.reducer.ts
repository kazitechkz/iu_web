import {createReducer, on} from "@ngrx/store";
import {
  deleteExamByIdAction,
  deleteExamByIdFailure,
  deleteExamByIdSuccess,
  deleteUNTExamByIdAction, deleteUNTExamByIdFailure, deleteUNTExamByIdSuccess
} from "./exams.action";
import {deleteExamByIdState, deleteUNTExamByIdState} from "./exams.state";


const _deleteExamByIdReducer = createReducer(
    deleteExamByIdState,
    on(deleteExamByIdAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(deleteExamByIdSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(deleteExamByIdFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function deleteExamByIdReducer(state: any, action: any) {
    return _deleteExamByIdReducer(state, action);
}

const _deleteUNTExamByIdReducer = createReducer(
    deleteUNTExamByIdState,
    on(deleteUNTExamByIdAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(deleteUNTExamByIdSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(deleteUNTExamByIdFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function deleteUNTExamByIdReducer(state: any, action: any) {
    return _deleteUNTExamByIdReducer(state, action);
}
