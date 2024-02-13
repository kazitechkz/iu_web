import {Pagination} from "../../pagination";
import {CareerQuiz} from "../../../models/careerQuiz.model";

export interface GetCareerQuizzesModel{
  quizzes:Pagination<CareerQuiz[]>
  purchased:number[]
}
