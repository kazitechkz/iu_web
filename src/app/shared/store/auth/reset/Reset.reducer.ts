import {createReducer, on} from "@ngrx/store";
import {initialResetPasswordState, initialSendResetTokenState} from "./Reset.state";
import {
  resetPasswordAction, resetPasswordFailureAction, resetPasswordSuccessAction,
  sendResetTokenAction,
  sendResetTokenFailureAction,
  sendResetTokenSuccessAction
} from "./Reset.action";
import {state} from "@angular/animations";
import {act} from "@ngrx/effects";

const _sendResetTokenReducer = createReducer(
  initialSendResetTokenState,
  on(sendResetTokenAction, (state) => {
    return {
      ...state
    }
  }),
  on(sendResetTokenSuccessAction, (state, action) => {
    return {
      ...state,
      errors: null,
      success: action.responseData.data
    }
  }),
  on(sendResetTokenFailureAction, (state, action) => {
    return {
      ...state,
      errors: action.errors,
      success: false
    }
  })
)

export function sendResetTokenReducer(state: any, action: any) {
  return _sendResetTokenReducer(state, action);
}


const _resetPasswordReducer = createReducer(
  initialResetPasswordState,
  on(resetPasswordAction, (state) => {
    return {
      ...state
    }
  }),
  on(resetPasswordSuccessAction, (state, action) => {
    return {
      ...state,
      errors: null,
      success: action.responseData.data
    }
  }),
  on(resetPasswordFailureAction, (state, action) => {
    return {
      ...state,
      errors: action.errors,
      success: false
    }
  })
)

export function resetPasswordReducer(state: any, action: any) {
  return _resetPasswordReducer(state, action);
}
