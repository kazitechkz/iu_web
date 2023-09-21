export interface SendResetTokenState {
  success: boolean | null,
  errors: any,
}

export const initialSendResetTokenState: SendResetTokenState = {
  success: null,
  errors: null,
};


export interface ResetPasswordState {
  success: boolean | null,
  errors: any,
}

export const initialResetPasswordState: ResetPasswordState = {
  success: null,
  errors: null,
};
