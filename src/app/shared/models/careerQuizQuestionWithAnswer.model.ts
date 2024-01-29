import {CareerQuizQuestion} from "./careerQuizQuestion.model";
import {CareerQuizAnswer} from "./careerQuizAnswer.model";

export interface CareerQuizQuestionWithAnswerModel{

  question:CareerQuizQuestion,
  answers:CareerQuizAnswer[]|null

}
