import {Image} from "./image.model";

export interface CareerQuizFeature {
  id: number
  image_url: number|null
  quiz_id: number
  title_ru: string
  title_kk: string
  title_en: string|null
  description_ru: string
  description_kk: string
  description_en: string|null
  activity_ru: string
  activity_kk: string
  activity_en: string|null
  prospect_ru: string
  prospect_kk: string
  prospect_en: string|null
  meaning_ru: string
  meaning_kk: string
  meaning_en: string|null
  created_at: Date
  updated_at: Date|null
  file:Image|null
}
