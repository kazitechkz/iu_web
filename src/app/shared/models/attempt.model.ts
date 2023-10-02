import {Question} from "./question.model";
export interface Attempt {
  attempt_id:        number;
  type_id:           number;
  time_left:         number;
  subject_questions: SubjectQuestion[];
}

export interface SubjectQuestion {
  title_ru:           string;
  title_kk:           string;
  question:           Question[];
  attempt_subject_id: number;
}
