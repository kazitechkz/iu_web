import {createReducer, on} from "@ngrx/store";
import {googleAction, GoogleActionFailure, GoogleActionSuccess} from "./google.action";
import {GoogleState} from "./google.state";


const _googleReducer = createReducer(
    GoogleState,
    on(googleAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(GoogleActionSuccess, (state, action) => {
        return {
            ...state,
            status: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(GoogleActionFailure, (state, action) => {
        return {
            ...state,
            status: false,
            errors: action.errors
        }
    })
);

export function googleReducer(state: any, action: any) {
    return _googleReducer(state, action);
}
