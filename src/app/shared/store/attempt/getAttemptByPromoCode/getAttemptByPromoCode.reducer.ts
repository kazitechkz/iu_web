import {createReducer, on} from "@ngrx/store";
import {getAttemptByPromoCodeState} from "./getAttemptByPromoCode.state";
import {
  getAttemptByPromoCodeAction,
  getAttemptByPromoCodeActionSuccess, getAttemptByPromoCodeActionFailure
} from "./getAttemptByPromoCode.action";

const _getAttemptByPromoCodeReducer = createReducer(
  getAttemptByPromoCodeState,
  on(getAttemptByPromoCodeAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getAttemptByPromoCodeActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getAttemptByPromoCodeActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getAttemptByPromoCodeReducer(state: any, action: any) {
  return _getAttemptByPromoCodeReducer(state, action);

}
