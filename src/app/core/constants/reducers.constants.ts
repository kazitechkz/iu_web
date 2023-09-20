import {loginReducer} from "../../shared/store/auth/login/login.reducer";
import {registerReducer} from "../../shared/store/auth/register/Register.reducer";

export const ReducersConstants = {
    login: loginReducer,
    register: registerReducer
}
