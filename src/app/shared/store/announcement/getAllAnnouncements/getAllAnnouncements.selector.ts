import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AnnouncementGroup} from "../../../models/announcementGroup.model";

const get_all_announcements_state = createFeatureSelector<ResponseData<AnnouncementGroup[]>>('getAllAnnouncements');

export const getAllAnnouncementsState = createSelector(get_all_announcements_state, (state) => {
  return state;
})
