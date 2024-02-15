import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Me} from "../../../models/user.model";
import {ResponseData} from "../../response_data";

const user_check_state = createFeatureSelector<ResponseData<boolean>>('userCheck');
export const userCheckState = createSelector(user_check_state, (state) => {
    return state;
})

