import {createReducer, on} from "@ngrx/store";
import {
    getCategoryQuestionCountAction, getCategoryQuestionCountActionFailure,
    getCategoryQuestionCountActionSuccess,
} from "./getCategoryQuestionCount.action";
import {getCategoryQuestionCountState} from "./getCategoryQuestionCount.state";


const _getCategoryQuestionCountReducer = createReducer(
    getCategoryQuestionCountState,
    on(getCategoryQuestionCountAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(getCategoryQuestionCountActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(getCategoryQuestionCountActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function getCategoryQuestionCountReducer(state: any, action: any) {
    return _getCategoryQuestionCountReducer(state, action);

}
