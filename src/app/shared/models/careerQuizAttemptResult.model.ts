import {CareerQuizFeature} from "./careerQuizFeature.model";
import {CareerQuizAttempt} from "./careerQuizAttempt.model";

export interface CareerQuizAttemptResult{
  id:number
  attempt_id:number
  feature_id:number
  points:number
  percentage:number
  created_at: Date
  updated_at: Date|null
  career_quiz_attempt:CareerQuizAttempt|null
  career_quiz_feature:CareerQuizFeature|null
}
