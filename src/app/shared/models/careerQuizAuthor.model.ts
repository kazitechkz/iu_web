import {Image} from "./image.model";
import {CareerQuiz} from "./careerQuiz.model";

export interface CareerQuizAuthor {
  id: number
  group_id: number
  image_url: number|null
  name: string
  position_ru: string
  position_kk: string
  description_ru: string
  description_kk: string
  instagram_url: string|null
  facebook_url: string|null
  vk_url: string|null
  linkedin_url: string|null
  site: string|null
  email: string|null
  phone: string|null
  created_at: Date
  updated_at: Date|null
  file:Image|null
  career_quiz:CareerQuiz|null
}
