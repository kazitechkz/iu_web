import {Locale} from "moment";
import {Subject} from "./subject.model";
import {Image} from "./image.model";

export interface Tournament {
  id: number
  subject_id: number
  title_ru: string
  title_kk: string
  title_en: string
  rule_ru: string
  rule_kk: string
  rule_en: string
  description_ru: string
  description_kk: string
  description_en: string
  price: number
  currency: string
  poster: number
  status: number
  start_at: string
  end_at: string
  deleted_at: any
  created_at: string
  updated_at: string
  locales: Locale[]|null
  subject: Subject|null
  file: Image
}
