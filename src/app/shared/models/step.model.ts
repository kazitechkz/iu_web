import {Image} from "./image.model";
import {CategoryModel} from "./category.model";
import {Subject} from "./subject.model";
export interface Steps {
  id: number
  title_ru: string
  title_kk: string
  title_en: string | null
  subject_id: number
  category_id: number
  plan_id: number
  level: number
  is_free: boolean
  is_active: boolean
  image: Image | null
  progress_kk: number
  progress_ru: number
  subject: Subject | null
}
export interface StepModel {
  id: number
  title_kk: string
  title_ru: string
  enable: boolean
  is_compulsory: boolean
  max_questions_quantity: number
  questions_step: number
  image_url: number
  subject_id: number|null
  created_at: any
  updated_at: string
  deleted_at: any
  image: Image | null
  categories: CategoryModel[] | null
  steps_count: number
  sub_steps_count: number
  progress: number
}
