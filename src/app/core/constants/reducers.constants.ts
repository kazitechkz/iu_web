import {loginReducer} from "../../shared/store/auth/login/login.reducer";
import {registerReducer} from "../../shared/store/auth/register/Register.reducer";
import {resetPasswordReducer, sendResetTokenReducer} from "../../shared/store/auth/reset/Reset.reducer";
import {accountReducer} from "../../shared/store/user/account/account.reducer";
import {subjectReducer} from "../../shared/store/subject/subject.reducer";

export const ReducersConstants = {
  login: loginReducer,
  register: registerReducer,
  sendResetToken: sendResetTokenReducer,
  resetPassword: resetPasswordReducer,
  me: accountReducer,
  subjects:subjectReducer
}
