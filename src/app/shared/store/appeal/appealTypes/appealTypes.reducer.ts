import {createReducer, on} from "@ngrx/store";
import {appealTypesState} from "./appealTypes.state";
import {
  appealTypesAction, appealTypesActionFailure, appealTypesActionSuccess,
} from "./appealTypes.action";

const _appealTypeReducer = createReducer(
  appealTypesState,
  on(appealTypesAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(appealTypesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(appealTypesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function appealTypesReducer(state: any, action: any) {
  return _appealTypeReducer(state, action);
}
