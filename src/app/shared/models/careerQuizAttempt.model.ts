import {CareerQuiz} from "./careerQuiz.model";
import {OrdinaryUser} from "./user.model";
import {CareerQuizAttemptResult} from "./careerQuizAttemptResult.model";

export interface CareerQuizAttempt{
    id:number
    user_id:number
    quiz_id:number
    given_answers:string
    created_at: Date
    updated_at: Date|null
    career_quiz:CareerQuiz|null
    user:OrdinaryUser|null
    career_quiz_attempt_results:CareerQuizAttemptResult[]|null

}
