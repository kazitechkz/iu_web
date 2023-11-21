import {createAction, props} from "@ngrx/store";
import {GetAllAnnouncementsActionTypes} from "./getAllAnnouncements.action.types";
import {ResponseData} from "../../response_data";
import {AnnouncementGroup} from "../../../models/announcementGroup.model";

export const GetAllAnnouncementsAction = createAction(GetAllAnnouncementsActionTypes.GetAllAnnouncementsAction);
export const GetAllAnnouncementsActionSuccess = createAction(GetAllAnnouncementsActionTypes.GetAllAnnouncementsActionSuccess, props<{
  responseData: ResponseData<AnnouncementGroup[]>
}>());
export const GetAllAnnouncementsActionFailure = createAction(GetAllAnnouncementsActionTypes.GetAllAnnouncementsActionFailure, props<{ errors: any }>());
