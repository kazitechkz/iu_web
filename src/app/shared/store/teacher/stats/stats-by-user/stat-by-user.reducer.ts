import {createReducer, on} from "@ngrx/store";
import {statByUserState} from "./stat-by-user.state";
import {StatByUserAction, StatByUserFailure, StatByUserSuccess} from "./stat-by-user.action";


const _statByUserReducer = createReducer(
    statByUserState,
    on(StatByUserAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(StatByUserSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(StatByUserFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function teacherStatByUserReducer(state: any, action: any) {
    return _statByUserReducer(state, action);
}
