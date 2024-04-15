import {createReducer, on} from "@ngrx/store";
import {logoutAction, LogoutActionFailure, LogoutActionSuccess} from "./logout.action";
import {LogOutState} from "./logout.state";

const _LogoutReducer = createReducer(
    LogOutState,
    on(logoutAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(LogoutActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null
        }
    }),
    on(LogoutActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function logoutReducer(state: any, action: any) {
    return _LogoutReducer(state, action);

}
