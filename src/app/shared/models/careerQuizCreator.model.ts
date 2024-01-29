import {CareerQuizAuthor} from "./careerQuizAuthor.model";
import {CareerQuiz} from "./careerQuiz.model";

export interface CareerQuizCreator {
  id: number
  quiz_id: number
  author_id: number
  created_at: Date
  updated_at: Date|null
  career_quiz_author: CareerQuizAuthor|null
  career_quiz:CareerQuiz|null
}
