import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetTechSupportTicketDetailActionTypes} from "./getTechSupportTicketDetail.action.types";
import {GetTechSupportTicketDetailModel} from "./getTechSupportTicketDetail.model";
import {GetTechSupportTicketDetailService} from "./getTechSupportTicketDetail.service";
import {GetTechSupportTicketDetailRequest} from "./getTechSupportTicketDetail.request";

export const getTechSupportTicketDetailAction = createAction(GetTechSupportTicketDetailActionTypes.OnGetTechSupportTicketDetail,props<{requestData:GetTechSupportTicketDetailRequest}>());
export const getTechSupportTicketDetailActionSuccess = createAction(GetTechSupportTicketDetailActionTypes.OnGetTechSupportTicketDetailSuccess, props<{
  responseData: ResponseData<GetTechSupportTicketDetailModel>
}>());
export const getTechSupportTicketDetailActionFailure = createAction(GetTechSupportTicketDetailActionTypes.OnGetTechSupportTicketDetailFailure, props<{ errors: any }>());
