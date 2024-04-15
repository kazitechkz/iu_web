import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {UserModel} from "../../../models/user.model";

const get_Google_state = createFeatureSelector<ResponseData<UserModel>>('Google');

export const getGoogleState = createSelector(get_Google_state, (state) => {
    return state;
})
