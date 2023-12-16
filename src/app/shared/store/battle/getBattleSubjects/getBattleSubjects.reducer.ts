import {createReducer, on} from "@ngrx/store";
import {getBattleSubjectsState} from "./getBattleSubjects.state";
import {
  getBattleSubjectsAction,
  getBattleSubjectsActionSuccess,
  getBattleSubjectsActionFailure,
} from "./getBattleSubjects.action";

const _getBattleSubjectsReducer = createReducer(
  getBattleSubjectsState,
  on(getBattleSubjectsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getBattleSubjectsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getBattleSubjectsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getBattleSubjectsReducer(state: any, action: any) {
  return _getBattleSubjectsReducer(state, action);
}
