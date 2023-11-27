import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateTechSupportTicketActionTypes} from "./createTechSupportTicket.action.types";
import {CreateTechSupportTicketRequest} from "./createTechSupportTicket.request";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";

export const createTechSupportTicketAction = createAction(CreateTechSupportTicketActionTypes.OnCreateTechSupportTicket,props<{requestData:CreateTechSupportTicketRequest}>());
export const createTechSupportTicketActionSuccess = createAction(CreateTechSupportTicketActionTypes.OnCreateTechSupportTicketSuccess, props<{
  responseData: ResponseData<TechSupportTicket>
}>());
export const createTechSupportTicketActionFailure = createAction(CreateTechSupportTicketActionTypes.OnCreateTechSupportTicketFailure, props<{ errors: any }>());
