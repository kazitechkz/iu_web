import {createReducer, on} from "@ngrx/store";
import {getMyAppealQuestionsState} from "./getMyAppealQuestions.state";
import {
    getMyAppealQuestionsAction,
    getMyAppealQuestionsActionFailure,
    getMyAppealQuestionsActionSuccess
} from "./getMyAppealQuestions.action";


const _getMyAppealQuestionsReducer = createReducer(
    getMyAppealQuestionsState,
    on(getMyAppealQuestionsAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(getMyAppealQuestionsActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(getMyAppealQuestionsActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function getMyAppealQuestionsReducer(state: any, action: any) {
    return _getMyAppealQuestionsReducer(state, action);

}
