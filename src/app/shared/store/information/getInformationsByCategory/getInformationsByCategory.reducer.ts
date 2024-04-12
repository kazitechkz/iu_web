import {createReducer, on} from "@ngrx/store";
import {getInformationsByCategoryState} from "./getInformationsByCategory.state";
import {
  getInformationAction,
  getInformationActionFailure,
  getInformationActionSuccess
} from "../getInformation/getInformation.action";


const _getInformationsByCategoryReducer = createReducer(
  getInformationsByCategoryState,
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

export function getInformationsByCategoryReducer(state: any, action: any) {
  return _getInformationsByCategoryReducer(state, action);
}
