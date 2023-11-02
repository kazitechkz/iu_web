import {AttemptModel} from "../../../models/attempt";
import {Subject} from "../../../models/subject.model";

export interface ResultByAttemptIdModel{
  attempt:AttemptModel,
  subjects:Subject[],
  subject_result:SubjectResult[]
}

export interface SubjectResult{
  subject_id:number
  right:number
  not_right:number
  total:number
  point:number
}
