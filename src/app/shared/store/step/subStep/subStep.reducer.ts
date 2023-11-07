import {createReducer, on} from "@ngrx/store";
import {subStepDetailState, subStepResultState, subStepState} from "./subStep.state";
import {
  subStepAction,
  subStepActionFailure,
  subStepActionSuccess,
  subStepDetailActionFailure,
  subStepDetailActionSuccess, subStepResultActionFailure, subStepResultActionSuccess
} from "./subStep.action";


const _subStepReducer = createReducer(
    subStepState,
    on(subStepAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(subStepActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(subStepActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function subStepReducer(state: any, action: any) {
    return _subStepReducer(state, action);
}

const _subStepDetailReducer = createReducer(
    subStepDetailState,
    on(subStepAction, (state, action) => {
        return {
            ...state,
          errors: null,
          data: null
        }
    }),
    on(subStepDetailActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(subStepDetailActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function subStepDetailReducer(state: any, action: any) {
    return _subStepDetailReducer(state, action);
}

const _subStepResultReducer = createReducer(
    subStepResultState,
    on(subStepAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(subStepResultActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(subStepResultActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function subStepResultReducer(state: any, action: any) {
    return _subStepResultReducer(state, action);
}
