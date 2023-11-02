import {createReducer, on} from "@ngrx/store";
import {statBySubjectIdState} from "./statBySubjectId.state";
import {statBySubjectIdAction, StatBySubjectIdFailureAction, StatBySubjectIdSuccessAction} from "./statBySubjectId.action";


const _statBySubjectIdReducer = createReducer(
  statBySubjectIdState,
  on(statBySubjectIdAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(StatBySubjectIdSuccessAction, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(StatBySubjectIdFailureAction, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function statBySubjectIdReducer(state: any, action: any) {
  return _statBySubjectIdReducer(state, action);
}
