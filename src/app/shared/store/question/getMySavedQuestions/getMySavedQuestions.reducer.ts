import {createReducer, on} from "@ngrx/store";
import {getMySavedQuestionsState} from "./getMySavedQuestions.state";
import {
  getMySavedQuestionsAction,
  getMySavedQuestionsActionFailure,
  getMySavedQuestionsActionSuccess
} from "./getMySavedQuestions.action";


const _getMySavedQuestionsReducer = createReducer(
    getMySavedQuestionsState,
    on(getMySavedQuestionsAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(getMySavedQuestionsActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(getMySavedQuestionsActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function getMySavedQuestionsReducer(state: any, action: any) {
    return _getMySavedQuestionsReducer(state, action);

}
