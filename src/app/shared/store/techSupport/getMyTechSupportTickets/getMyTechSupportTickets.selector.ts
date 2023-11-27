import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {TechSupportCategory} from "../../../models/techSupportCategory.model";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";
import {Pagination} from "../../pagination";

const get_my_tech_support_tickets_state = createFeatureSelector<ResponseData<Pagination<TechSupportTicket[]>>>('getMyTechSupportTickets');

export const getMyTechSupportTicketsSelector = createSelector(get_my_tech_support_tickets_state, (state) => {
  return state;
})
