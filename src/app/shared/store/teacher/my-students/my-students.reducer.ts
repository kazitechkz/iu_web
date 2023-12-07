import {createReducer, on} from "@ngrx/store";
import {myStudentsState} from "./my-students.state";
import {MyStudentsAction, MyStudentsFailure, MyStudentsSuccess} from "./my-students.action";

const _myStudentsReducer = createReducer(
    myStudentsState,
    on(MyStudentsAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(MyStudentsSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(MyStudentsFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function teacherMyStudentsReducer(state: any, action: any) {
    return _myStudentsReducer(state, action);
}
