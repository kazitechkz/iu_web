import {createReducer, on} from "@ngrx/store";
import {getInformationState} from "./getInformation.state";
import {
  getInformationAction,
  getInformationActionSuccess, getInformationActionFailure
} from "./getInformation.action";

const _getInformationReducer = createReducer(
  getInformationState,
  on(getInformationAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getInformationActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getInformationActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getInformationReducer(state: any, action: any) {
  return _getInformationReducer(state, action);
}
