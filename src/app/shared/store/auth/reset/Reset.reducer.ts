import {createReducer, on} from "@ngrx/store";
import {
  resetPasswordAction, resetPasswordFailureAction, resetPasswordSuccessAction,
  sendResetTokenAction,
  sendResetTokenFailureAction,
  sendResetTokenSuccessAction
} from "./Reset.action";
import {SendResetPasswordState} from "./Reset.state";

const _sendResetTokenReducer = createReducer(
  SendResetPasswordState,
  on(sendResetTokenAction, (state) => {
    return {
      ...state
    }
  }),
  on(sendResetTokenSuccessAction, (state, action) => {
    return {
      ...state,
      errors: null,
      status: action.responseData.status,
      data: action.responseData.data
    }
  }),
  on(sendResetTokenFailureAction, (state, action) => {
    return {
      ...state,
      errors: action.errors,
      status: false
    }
  })
)

export function sendResetTokenReducer(state: any, action: any) {
  return _sendResetTokenReducer(state, action);
}


const _resetPasswordReducer = createReducer(
  SendResetPasswordState,
  on(resetPasswordAction, (state) => {
    return {
      ...state
    }
  }),
  on(resetPasswordSuccessAction, (state, action) => {
    return {
      ...state,
      errors: null,
      status: action.responseData.status,
      data: action.responseData.data
    }
  }),
  on(resetPasswordFailureAction, (state, action) => {
    return {
      ...state,
      errors: action.errors,
      status: false
    }
  })
)

export function resetPasswordReducer(state: any, action: any) {
  return _resetPasswordReducer(state, action);
}
