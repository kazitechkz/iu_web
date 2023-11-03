import {Subject} from "../../../models/subject.model";
import {SubCategoryModel} from "../../../models/subCategory.model";

export interface StatBySubjectIdModel{
  subject:Subject,
  stat_by_subject:StatBySubject[]
}

export interface StatBySubject{
  sub_category:SubCategoryModel|null,
  subject_id:number
  right:number
  not_right:number
  total:number
}
