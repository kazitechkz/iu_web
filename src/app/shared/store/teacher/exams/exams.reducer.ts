import {createReducer, on} from "@ngrx/store";
import {deleteClassroomByIDState} from "../classrooms/classrooms.state";
import {deleteExamByIdAction, deleteExamByIdFailure, deleteExamByIdSuccess} from "./exams.action";


const _deleteExamByIdReducer = createReducer(
    deleteClassroomByIDState,
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
