import {createFeatureSelector, createSelector} from "@ngrx/store";
import {LoginState} from "./login.state";

const get_login_state = createFeatureSelector<LoginState>('login');

export const getloginState = createSelector(get_login_state, (state) => {
    return state;
})
