import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";
import {GetTechSupportTicketDetailModel} from "./getTechSupportTicketDetail.model";


export const getTechSupportTicketDetailAdapter = createEntityAdapter<GetTechSupportTicketDetailModel>();

export const getTechSupportTicketDetailState: EntityState<GetTechSupportTicketDetailModel> = getTechSupportTicketDetailAdapter.getInitialState();
