import {createReducer, on} from "@ngrx/store";
import {stepDetailAction, stepDetailActionFailure, stepDetailActionSuccess} from "./stepDetail.action";
import {stepDetailState} from "./stepDetail.state";


const _stepReducer = createReducer(
    stepDetailState,
    on(stepDetailAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(stepDetailActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(stepDetailActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function stepDetailReducer(state: any, action: any) {
    return _stepReducer(state, action);

}
