import {createReducer, on} from "@ngrx/store";
import {getFiftyFiftyState} from "./getFiftyFifty.state";

import {
  onGetFiftyFiftyAction,
  onGetFiftyFiftyActionFailure,
  onGetFiftyFiftyActionSuccess
} from "./getFiftyFifty.action";

const _getFiftyFiftyReducer = createReducer(
  getFiftyFiftyState,
  on(onGetFiftyFiftyAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(onGetFiftyFiftyActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(onGetFiftyFiftyActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getFiftyFiftyReducer(state: any, action: any) {
  return _getFiftyFiftyReducer(state, action);

}
