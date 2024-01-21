import {CareerQuizFeature} from "./careerQuizFeature.model";

export interface CareerQuizGroup {
  id: number
  title_ru: string
  title_kk: string
  title_en: string|null
  description_ru: string
  description_kk: string
  description_en: string|null
  email: string|null
  phone: string|null
  address: string|null
  price: number
  currency: string
  created_at: Date
  updated_at: Date|null
}
