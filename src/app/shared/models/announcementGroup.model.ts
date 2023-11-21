import {Announcement} from "./announcement.model";
import {Image} from "./image.model";

export interface AnnouncementGroup {
  id: number
  title_ru: string
  title_kk: string
  title_en: string
  is_active: boolean
  thumbnail: number
  start_date: string
  end_date: string
  order: number
  created_at: Date
  updated_at: Date|null
  announcements_count: number
  announcements: Announcement[]
  file: Image|null
}
