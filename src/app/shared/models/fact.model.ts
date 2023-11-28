import {Subject} from "./subject.model";

export interface FactModel {
  id: number
  subjectId: number
  subject: Subject
  text_kk: string
  text_ru: string
}
