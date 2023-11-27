import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";

const create_tech_support_ticket_state = createFeatureSelector<ResponseData<TechSupportTicket>>('createTechSupportTicket');

export const createTechSupportTicketSelector = createSelector(create_tech_support_ticket_state, (state) => {
  return state;
})
