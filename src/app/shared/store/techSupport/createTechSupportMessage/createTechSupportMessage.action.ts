import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateTechSupportMessageActionTypes} from "./createTechSupportMessage.action.types";
import {CreateTechSupportMessageRequest} from "./createTechSupportMessage.request";
import {TechSupportMessage} from "../../../models/techSupportMessage.model";

export const createTechSupportMessageAction = createAction(CreateTechSupportMessageActionTypes.OnCreateTechSupportMessage,props<{requestData:CreateTechSupportMessageRequest}>());
export const createTechSupportMessageActionSuccess = createAction(CreateTechSupportMessageActionTypes.OnCreateTechSupportMessageSuccess, props<{
  responseData: ResponseData<TechSupportMessage>
}>());
export const createTechSupportMessageActionFailure = createAction(CreateTechSupportMessageActionTypes.OnCreateTechSupportMessageFailure, props<{ errors: any }>());
