import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {UserModel} from "../../../models/user.model";

const get_Kundelik_state = createFeatureSelector<ResponseData<UserModel>>('kundelik');

export const getKundelikState = createSelector(get_Kundelik_state, (state) => {
    return state;
})
