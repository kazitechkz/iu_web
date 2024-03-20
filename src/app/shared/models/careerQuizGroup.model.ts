import {CareerQuizFeature} from "./careerQuizFeature.model";
import {CareerQuizAuthor} from "./careerQuizAuthor.model";
import {CareerQuiz} from "./careerQuiz.model";

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
  old_price:number
  currency: string
  created_at: Date
  updated_at: Date|null,
  career_quiz_authors:CareerQuizAuthor[]|null
  career_quizzes:CareerQuiz[]|null

}
