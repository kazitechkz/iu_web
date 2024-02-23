import {createReducer, on} from "@ngrx/store";
import {kundelikAction, KundelikActionFailure, KundelikActionSuccess} from "./kundelik.action";
import {KundelikState} from "./kundelik.state";


const _kundelikReducer = createReducer(
    KundelikState,
    on(kundelikAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(KundelikActionSuccess, (state, action) => {
        return {
            ...state,
            status: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(KundelikActionFailure, (state, action) => {
        return {
            ...state,
            status: false,
            errors: action.errors
        }
    })
);

export function kundelikReducer(state: any, action: any) {
    return _kundelikReducer(state, action);
}
