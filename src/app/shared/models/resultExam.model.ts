import {Question, SubStepExamModel} from "./question.model";

export interface ResultExamModel {
  questions: SubStepExamModel[]
  is_right: number
  count: number
}
