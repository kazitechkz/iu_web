import {createReducer, on} from "@ngrx/store";
import {createAppealState} from "./createAppeal.state";
import {
  onCreateAppealAction, onCreateAppealActionFailure, onCreateAppealActionSuccess,
} from "./createAppeal.action";


const _createAppealReducer = createReducer(
  createAppealState,
  on(onCreateAppealAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(onCreateAppealActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(onCreateAppealActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createAppealReducer(state: any, action: any) {
  return _createAppealReducer(state, action);

}
