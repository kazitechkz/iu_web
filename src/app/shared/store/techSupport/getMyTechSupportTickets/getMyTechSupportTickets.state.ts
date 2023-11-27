import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";
import {Pagination} from "../../pagination";


export const getMyTechSupportTicketsAdapter = createEntityAdapter<Pagination<TechSupportTicket[]>>();

export const getMyTechSupportTicketsState: EntityState<Pagination<TechSupportTicket[]>> = getMyTechSupportTicketsAdapter.getInitialState();
