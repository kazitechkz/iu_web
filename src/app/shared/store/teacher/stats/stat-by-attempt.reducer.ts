import {createReducer, on} from "@ngrx/store";
import {statExamByIdState} from "./stat-by-attempt.state";
import {StatExamByIdAction, StatExamByIdFailure, StatExamByIdSuccess} from "./stat-by-attempt.action";


const _statExamByIdReducer = createReducer(
    statExamByIdState,
    on(StatExamByIdAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(StatExamByIdSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(StatExamByIdFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function statExamByIdReducer(state: any, action: any) {
    return _statExamByIdReducer(state, action);
}
