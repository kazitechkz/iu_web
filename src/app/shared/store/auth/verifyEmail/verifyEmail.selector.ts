import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserModel} from "../../../models/user.model";
import {ResponseData} from "../../response_data";

const get_verify_state = createFeatureSelector<ResponseData<boolean>>('verifyEmail');

export const getVerifyState = createSelector(get_verify_state, (state) => {
    return state;
})
