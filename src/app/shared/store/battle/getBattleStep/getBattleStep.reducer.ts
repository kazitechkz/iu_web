import {createReducer, on} from "@ngrx/store";
import {getBattleStepState} from "./getBattleStep.state";
import {
  getBattleStepAction,
  getBattleStepActionSuccess,
  getBattleStepActionFailure,
} from "./getBattleStep.action";

const _getBattleStepReducer = createReducer(
  getBattleStepState,
  on(getBattleStepAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getBattleStepActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getBattleStepActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getBattleStepReducer(state: any, action: any) {
  return _getBattleStepReducer(state, action);
}
