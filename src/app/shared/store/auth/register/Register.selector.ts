import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_register_state = createFeatureSelector<ResponseData<string>>('register');
export const getRegisterState = createSelector(get_register_state, (state) => {
    return state;
})
