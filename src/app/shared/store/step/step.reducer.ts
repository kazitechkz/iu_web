import {createReducer, on} from "@ngrx/store";
import {stepAction, stepActionFailure, stepActionSuccess} from "./step.action";
import {stepState} from "./step.state";


const _stepReducer = createReducer(
    stepState,
    on(stepAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(stepActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(stepActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function stepReducer(state: any, action: any) {
    return _stepReducer(state, action);

}
