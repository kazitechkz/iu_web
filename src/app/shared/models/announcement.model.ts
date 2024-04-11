import {Image} from "./image.model";
import {AnnouncementType} from "./announcementType.model";
import {AnnouncementGroup} from "./announcementGroup.model";

export interface Announcement {
  id: number
  type_id: number
  group_id: number
  background: number
  title: string
  sub_title: string
  description?: string
  time_in_sec: number
  url_text: any
  url: any
  video_url: string|null
  created_at: Date
  updated_at: Date|null
  image: Image|null
  announcement_type: AnnouncementType|null
  group: AnnouncementGroup|null
}
