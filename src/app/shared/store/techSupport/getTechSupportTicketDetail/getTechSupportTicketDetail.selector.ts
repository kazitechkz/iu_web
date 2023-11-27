import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetTechSupportTicketDetailModel} from "./getTechSupportTicketDetail.model";

const get_tech_support_ticket_detail_state = createFeatureSelector<ResponseData<GetTechSupportTicketDetailModel>>('getTechSupportTicketDetail');

export const getTechSupportTicketDetailSelector = createSelector(get_tech_support_ticket_detail_state, (state) => {
  return state;
})
