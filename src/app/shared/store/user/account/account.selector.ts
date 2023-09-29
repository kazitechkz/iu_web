import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Me} from "../../../models/user.model";
import {ResponseData} from "../../response_data";

const get_account_state = createFeatureSelector<ResponseData<Me>>('me');

export const getAccountState = createSelector(get_account_state, (state) => {
    return state;
})
