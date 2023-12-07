import {createReducer, on} from "@ngrx/store";
import {teacherStatByUNTState} from "./stat-by-unt.state";
import {
  StatByUNTAction, StatByUNTFailure, StatByUNTSuccess
} from "./stat-by-unt.action";

const _statByUNTReducer = createReducer(
    teacherStatByUNTState,
    on(StatByUNTAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(StatByUNTSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(StatByUNTFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function teacherStatByUNTReducer(state: any, action: any) {
    return _statByUNTReducer(state, action);
}
