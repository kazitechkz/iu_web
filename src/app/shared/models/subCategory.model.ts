import {Image} from "./image.model";
import {CategoryModel} from "./category.model";

export interface SubCategoryModel {
  id: number
  category_id: number
  title_kk: string
  title_ru: string
  image_url: Image | null
  category:CategoryModel|null
  s_questions_count: number
  c_questions_count: number
  m_questions_count: number
}
