import {createReducer, on} from "@ngrx/store";
import {createBattleStepState} from "./createBattleStep.state";
import {
  createBattleStepAction,
  createBattleStepActionSuccess,
  createBattleStepActionFailure,

} from "./createBattleStep.action";

const _createBattleStepReducer = createReducer(
  createBattleStepState,
  on(createBattleStepAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createBattleStepActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createBattleStepActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createBattleStepReducer(state: any, action: any) {
  return _createBattleStepReducer(state, action);
}
