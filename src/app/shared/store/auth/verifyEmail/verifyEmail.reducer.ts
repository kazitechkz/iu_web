import {createReducer, on} from "@ngrx/store";
import {verifyEmailAction, verifyActionSuccess, verifyActionFailure} from "./verifyEmail.action";
import {verifyState} from "./verifyEmail.state";


const _verifyReducer = createReducer(
    verifyState,
    on(verifyEmailAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(verifyActionSuccess, (state, action) => {
        return {
            ...state,
            status: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(verifyActionFailure, (state, action) => {
        return {
            ...state,
            status: false,
            errors: action.errors
        }
    })
);

export function verifyEmailReducer(state: any, action: any) {
    return _verifyReducer(state, action);
}
