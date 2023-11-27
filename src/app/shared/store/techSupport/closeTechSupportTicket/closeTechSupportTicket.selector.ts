import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";

const close_tech_support_ticket_state = createFeatureSelector<ResponseData<TechSupportTicket>>('closeTechSupportTicket');

export const closeTechSupportTicketSelector = createSelector(close_tech_support_ticket_state, (state) => {
  return state;
})
