import {createReducer, on} from "@ngrx/store";
import {
    getSubCategoryQuestionCountAction, getSubCategoryQuestionCountActionSuccess,
} from "./getSubCategoryQuestionCount.action";
import {getSubCategoryQuestionCountState} from "./getSubCategoryQuestionCount.state";
import {getCategoryQuestionCountActionFailure} from "../getCategoryQuestionCount/getCategoryQuestionCount.action";


const _getSubCategoryQuestionCountReducer = createReducer(
    getSubCategoryQuestionCountState,
    on(getSubCategoryQuestionCountAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(getSubCategoryQuestionCountActionSuccess, (state, action) => {
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

export function getSubCategoryQuestionCountReducer(state: any, action: any) {
    return _getSubCategoryQuestionCountReducer(state, action);

}
