import {createReducer, on} from "@ngrx/store";
import {statBySubjectIdState} from "./stat-by-subject.state";
import {StatBySubjectIdAction, StatBySubjectIdFailure, StatBySubjectIdSuccess} from "./stat-by-subject.action";

const _statBySubjectIdReducer = createReducer(
    statBySubjectIdState,
    on(StatBySubjectIdAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(StatBySubjectIdSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(StatBySubjectIdFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function teacherStatBySubjectIdReducer(state: any, action: any) {
    return _statBySubjectIdReducer(state, action);
}
