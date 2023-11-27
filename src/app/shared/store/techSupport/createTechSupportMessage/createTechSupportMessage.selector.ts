import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {TechSupportMessage} from "../../../models/techSupportMessage.model";

const create_tech_support_message_state = createFeatureSelector<ResponseData<TechSupportMessage>>('createTechSupportMessage');

export const createTechSupportMessageSelector = createSelector(create_tech_support_message_state, (state) => {
  return state;
})
