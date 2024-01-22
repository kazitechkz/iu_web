import {CareerQuiz} from "./careerQuiz.model";

export interface CareerQuizAnswer{
  id:number
  quiz_id:number
  title_ru: string
  title_kk: string
  title_en: string|null
  value:number
  career_quiz:CareerQuiz|null
}
