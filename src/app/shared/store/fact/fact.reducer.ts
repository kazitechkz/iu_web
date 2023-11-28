import {createReducer, on} from "@ngrx/store";
import {factAction, factActionFailure, factActionSuccess} from "./fact.action";
import {factState} from "./fact.state";


const _factReducer = createReducer(
    factState,
    on(factAction, (state, action) => {
        return {
            ...state,
          data: null
        }
    }),
    on(factActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(factActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function factReducer(state: any, action: any) {
    return _factReducer(state, action);

}
