import {createReducer, on} from "@ngrx/store";
import {statByAttemptIdState} from "./statByAttemptId.state";
import {statByAttemptIdAction, StatByAttemptIdFailureAction, StatByAttemptIdSuccessAction} from "./statByAttemptId.action";


const _statByAttemptIdReducer = createReducer(
  statByAttemptIdState,
  on(statByAttemptIdAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(StatByAttemptIdSuccessAction, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(StatByAttemptIdFailureAction, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function statByAttemptIdReducer(state: any, action: any) {
  return _statByAttemptIdReducer(state, action);
}
