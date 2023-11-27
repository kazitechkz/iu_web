import {createReducer, on} from "@ngrx/store";
import {getTechSupportTypesState} from "./getTechSupportTypes.state";
import {
  getTechSupportTypesAction,
  getTechSupportTypesActionSuccess,
  getTechSupportTypesActionFailure,

} from "./getTechSupportTypes.action";

const _getTechSupportTypesReducer = createReducer(
  getTechSupportTypesState,
  on(getTechSupportTypesAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getTechSupportTypesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getTechSupportTypesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getTechSupportTypesReducer(state: any, action: any) {
  return _getTechSupportTypesReducer(state, action);
}
