import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserModel} from "../../../models/user.model";
import {ResponseData} from "../../response_data";

const get_login_state = createFeatureSelector<ResponseData<UserModel>>('login');

export const getLoginState = createSelector(get_login_state, (state) => {
    return state;
})
