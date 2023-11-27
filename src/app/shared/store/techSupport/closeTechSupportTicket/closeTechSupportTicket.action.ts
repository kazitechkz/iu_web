import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CloseTechSupportTicketActionTypes} from "./closeTechSupportTicket.action.types";
import {CloseTechSupportTicketRequest} from "./closeTechSupportTicket.request";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";

export const closeTechSupportTicketAction = createAction(CloseTechSupportTicketActionTypes.OnCloseTechSupportTicket,props<{requestData:CloseTechSupportTicketRequest}>());
export const closeTechSupportTicketActionSuccess = createAction(CloseTechSupportTicketActionTypes.OnCloseTechSupportTicketSuccess, props<{
  responseData: ResponseData<TechSupportTicket>
}>());
export const closeTechSupportTicketActionFailure = createAction(CloseTechSupportTicketActionTypes.OnCloseTechSupportTicketFailure, props<{ errors: any }>());
