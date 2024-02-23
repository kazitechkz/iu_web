import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AuthInfo} from "../login/loginRequest";

const get_Kundelik_state = createFeatureSelector<ResponseData<AuthInfo>>('kundelik');

export const getKundelikState = createSelector(get_Kundelik_state, (state) => {
    return state;
})
