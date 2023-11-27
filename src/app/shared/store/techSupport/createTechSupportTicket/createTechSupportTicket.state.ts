import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";


export const createTechSupportTicketAdapter = createEntityAdapter<TechSupportTicket>();

export const createTechSupportTicketState: EntityState<TechSupportTicket> = createTechSupportTicketAdapter.getInitialState();
