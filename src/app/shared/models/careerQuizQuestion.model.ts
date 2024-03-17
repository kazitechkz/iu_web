import {CareerQuizFeature} from "./careerQuizFeature.model";
import {CareerQuiz} from "./careerQuiz.model";
import {CareerQuizAnswer} from "./careerQuizAnswer.model";

export interface CareerQuizQuestion {
  id: number
  quiz_id: number
  feature_id: number|null
  question_ru: string
  question_kk: string
  question_en: string|null
  context_ru: string|null
  context_kk: string|null
  context_en: string|null
  created_at: Date|null
  updated_at: Date|null
  career_quiz_feature:CareerQuizFeature|null
  career_quiz:CareerQuiz|null
  career_quiz_answers:CareerQuizAnswer[]|null
}
