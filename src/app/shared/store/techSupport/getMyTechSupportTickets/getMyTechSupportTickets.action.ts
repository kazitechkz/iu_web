import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMyTechSupportTicketsActionTypes} from "./getMyTechSupportTickets.action.types";
import {TechSupportTicket} from "../../../models/techSupportTicket.model";
import {GetMyTechSupportTicketsRequest} from "./getMyTechSupportTickets.request";
import {Pagination} from "../../pagination";

export const getMyTechSupportTicketsAction = createAction(GetMyTechSupportTicketsActionTypes.OnGetMyTechSupportTickets,
  props<{requestData:GetMyTechSupportTicketsRequest}>()
);
export const getMyTechSupportTicketsActionSuccess = createAction(GetMyTechSupportTicketsActionTypes.OnGetMyTechSupportTicketsSuccess, props<{
  responseData: ResponseData<Pagination<TechSupportTicket[]>>
}>());
export const getMyTechSupportTicketsActionFailure = createAction(GetMyTechSupportTicketsActionTypes.OnGetMyTechSupportTicketsFailure, props<{ errors: any }>());
