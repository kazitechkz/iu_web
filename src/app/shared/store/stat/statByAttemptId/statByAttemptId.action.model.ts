import {AttemptModel} from "../../../models/attempt";
import {Subject} from "../../../models/subject.model";
import {SubCategoryModel} from "../../../models/subCategory.model";
import {Question} from "../../../models/question.model";

export interface StatByAttemptIdModel {
  attempt: AttemptModel,
  subjects: Subject[],
  stat_by_attempt: StatByAttempt[]
}

export interface StatByAttempt {
  sub_category: SubCategoryModel | null,
  subject_id: number
  right: number
  not_right: number
  total: number
  questions: Question[] | null
}
