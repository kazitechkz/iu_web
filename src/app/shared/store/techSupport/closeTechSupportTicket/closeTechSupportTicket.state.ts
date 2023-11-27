import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";


export const closeTechSupportTicketAdapter = createEntityAdapter<TechSupportTicket>();

export const closeTechSupportTicketState: EntityState<TechSupportTicket> = closeTechSupportTicketAdapter.getInitialState();
