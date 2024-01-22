import {Image} from "./image.model";
import {CareerQuizGroup} from "./careerQuizGroup.model";
import {CareerQuizCreator} from "./careerQuizCreator.model";
import {CareerQuizQuestion} from "./careerQuizQuestion.model";
import {CareerQuizAnswer} from "./careerQuizAnswer.model";

export interface CareerQuiz {
  id: number
  group_id: number
  image_url: number|null
  title_ru: string
  title_kk: string
  title_en: string|null
  description_ru: string
  description_kk: string
  description_en: string|null
  rule_ru: string
  rule_kk: string
  rule_en: string|null
  price: number
  currency: string
  created_at: Date
  updated_at: Date|null
  career_quiz_questions_count: number|null
  file:Image|null
  career_quiz_group: CareerQuizGroup|null
  career_quiz_creators: CareerQuizCreator[]|null
  career_quiz_questions:CareerQuizQuestion[]|null
  career_quiz_answers:CareerQuizAnswer[]|null
}
