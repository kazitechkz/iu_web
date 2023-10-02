import {Image} from "./image.model";

export interface Subject {
  id: number
  title_kk: string
  title_ru: string
  enable: boolean
  is_compulsory: boolean
  max_questions_quantity: number
  questions_step: number
  image_url: number
  created_at: any
  updated_at: string
  deleted_at: any
  image: Image | null
}
