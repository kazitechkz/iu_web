import {createReducer, on} from "@ngrx/store";
import {initialLoginState} from "./login.state";
import {LoginActionTypes} from "./login.action.types";
import {loginAction, loginActionFailure, loginActionSuccess} from "./login.action";


const _loginReducer = createReducer(
    initialLoginState,
    on(loginAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(loginActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            token: action.responseData.data
        }
    }),
    on(loginActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function loginReducer(state: any, action: any) {
    return _loginReducer(state, action);

}
