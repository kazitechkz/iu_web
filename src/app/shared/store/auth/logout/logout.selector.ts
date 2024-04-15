import {createFeatureSelector, createSelector} from "@ngrx/store";

const get_Logout_state = createFeatureSelector<void>('Logout');

export const getLogoutState = createSelector(get_Logout_state, (state) => {
    return state;
})
