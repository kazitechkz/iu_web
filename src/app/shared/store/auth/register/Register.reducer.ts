import {createReducer, on} from "@ngrx/store";
import {registerAction, registerActionFailure, registerActionSuccess} from "./Register.action";
import {RegisterState} from "./Register.state";


const _register_reducer = createReducer(
    RegisterState,
    on(registerAction, (state, action) => {
        return {
            ...state
        }
    }),
    on(registerActionSuccess, (state, action) => {
        return {
            ...state,
            status: true,
            errors: null,
            data: action.responseData
        }
    }),
    on(registerActionFailure, (state, action) => {
        return {
            ...state,
            status: false,
            errors: action.errors
        }
    })
);

export function registerReducer(state: any, action: any) {
    return _register_reducer(state, action);

}
