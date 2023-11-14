import {SubCategoryModel} from "./subCategory.model";

export interface CategoryModel {
  id: number
  subject_id: number
  title_kk: string
  title_ru: string
  sub_categories: SubCategoryModel[] | null
  s_questions_count: number
  c_questions_count: number
  m_questions_count: number
}
