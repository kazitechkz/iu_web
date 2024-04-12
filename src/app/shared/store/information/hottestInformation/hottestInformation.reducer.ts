import {createReducer, on} from "@ngrx/store";
import {hottestInformationState} from "./hottestInformation.state";
import {hottestInformationAction, hottestInformationActionFailure, hottestInformationActionSuccess} from "./hottestInformation.action";

const _hottestInformationReducer = createReducer(
  hottestInformationState,
  on(hottestInformationAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(hottestInformationActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(hottestInformationActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function hottestInformationReducer(state: any, action: any) {
  return _hottestInformationReducer(state, action);
}
