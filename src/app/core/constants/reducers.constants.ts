import {loginReducer} from "../../shared/store/auth/login/login.reducer";
import {registerReducer} from "../../shared/store/auth/register/Register.reducer";
import {resetPasswordReducer, sendResetTokenReducer} from "../../shared/store/auth/reset/Reset.reducer";

export const ReducersConstants = {
    login: loginReducer,
    register: registerReducer,
    sendResetToken:sendResetTokenReducer,
    resetPassword:resetPasswordReducer,
}
