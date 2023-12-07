import {createReducer, on} from "@ngrx/store";
import {getMyAppealQuestionByIdState} from "./getMyAppealQuestionById.state";
import {
    getMyAppealQuestionByIdAction, getMyAppealQuestionByIdActionFailure, getMyAppealQuestionByIdActionSuccess,
} from "./getMyAppealQuestionById.action";


const _getMyAppealQuestionByIdReducer = createReducer(
    getMyAppealQuestionByIdState,
    on(getMyAppealQuestionByIdAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(getMyAppealQuestionByIdActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(getMyAppealQuestionByIdActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function getMyAppealQuestionByIdReducer(state: any, action: any) {
    return _getMyAppealQuestionByIdReducer(state, action);

}
