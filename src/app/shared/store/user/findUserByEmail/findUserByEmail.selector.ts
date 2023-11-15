import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {OrdinaryUser} from "../../../models/user.model";

const find_user_by_email_state = createFeatureSelector<ResponseData<OrdinaryUser>>('findUserByEmail');

export const findUserByEmailSelector = createSelector(find_user_by_email_state, (state) => {
  return state;
})
