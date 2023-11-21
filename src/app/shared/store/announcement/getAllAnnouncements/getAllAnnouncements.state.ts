import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AnnouncementGroup} from "../../../models/announcementGroup.model";

export const getAllAnnouncementsAdapter = createEntityAdapter<AnnouncementGroup[]>();

export const getAllAnnouncementsState: EntityState<AnnouncementGroup[]> = getAllAnnouncementsAdapter.getInitialState();
