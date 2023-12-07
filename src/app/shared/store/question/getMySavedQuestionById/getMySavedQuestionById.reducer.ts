import {createReducer, on} from "@ngrx/store";
import {getMySavedQuestionByIdState} from "./getMySavedQuestionById.state";
import {
  getMySavedQuestionByIdAction,
  getMySavedQuestionByIdActionFailure,
  getMySavedQuestionByIdActionSuccess
} from "./getMySavedQuestionById.action";



const _getMySavedQuestionByIdReducer = createReducer(
    getMySavedQuestionByIdState,
    on(getMySavedQuestionByIdAction, (state, action) => {
        return {
            ...state,
        }
    }),
    on(getMySavedQuestionByIdActionSuccess, (state, action) => {
        return {
            ...state,
            success: true,
            errors: null,
            data: action.responseData.data
        }
    }),
    on(getMySavedQuestionByIdActionFailure, (state, action) => {
        return {
            ...state,
            success: false,
            errors: action.errors
        }
    })
);

export function getMySavedQuestionByIdReducer(state: any, action: any) {
    return _getMySavedQuestionByIdReducer(state, action);

}
