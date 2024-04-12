import {createReducer, on} from "@ngrx/store";
import {allInformationsState} from "./allInformations.state";
import {allInformationsAction, allInformationsActionFailure, allInformationsActionSuccess} from "./allInformations.action";

const _allInformationsReducer = createReducer(
  allInformationsState,
  on(allInformationsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(allInformationsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(allInformationsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function allInformationsReducer(state: any, action: any) {
  return _allInformationsReducer(state, action);
}
