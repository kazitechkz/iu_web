import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RegisterState} from "./Register.state";

const get_register_state = createFeatureSelector<RegisterState>('register');

export const getRegisterState = createSelector(get_register_state, (state) => {
    return state;
})
